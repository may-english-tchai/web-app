import { useEffect, useState } from "react";
import { graphql } from "../store/http";
import "../assets/styles/testimony.scss";
import axios from "axios";
import Title from "./elements/Title";

const Testimony = () => {
	const [testimonyData, setTestimonyData] = useState([]);
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [error, setError] = useState(false);

	const fetchTestimonies = () => {
		graphql({
			query: `
        {
          testimonies(last: 5) {
            edges {
              node {
                id
                name
                createdAt
                subject
                content
              }
            }
          }
        }
      `,
		})
			.then((response) => {
				const testimonies = response.data.data.testimonies.edges.map(
					(edge) => edge.node,
				);
				setTestimonyData(testimonies);
			})
			.catch((error) => {
				console.log("Error fetching testimonies:", error);
			});
	};

	useEffect(() => {
		fetchTestimonies();
	}, []);

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (content.length < 20) {
			setError(true);
		} else {
			axios.post("http://localhost:3004/articles", {
				author,
				content,
				date: Date.now(),
			});
			setError(false);
			setAuthor("");
			setContent("");
			fetchTestimonies();
		}
	};

	return (
		<div id="testimony-section" className="testimony">
			<div id="testimony-container">
				<Title text="Temoignage" textColor="#FD6C9E" hrColor="#FD6C9E" />

				<div>
					<ul>
						<div>
							<img
								id="guillemet"
								src="img/guillemet2.svg"
								alt="guillemet"
								className="w-20 h-48 sm:w-20 sm:h-20"
							/>
						</div>
						{testimonyData.map((testimony) => (
							<li key={testimony.id}>
								<h3 className="font-bold">{testimony.name}</h3>
								<p className="text-gray-400 ">
									{formatDate(testimony.createdAt)}
								</p>
								<p>{testimony.subject}</p>
								<p>{testimony.content}</p>
								<br />
							</li>
						))}
					</ul>
					<div className="flex justify-end">
						<img
							src="img/guillemet2.svg"
							alt="guillemet"
							className="w-20 h-48 sm:w-20 sm:h-20 transform rotate-180"
						/>
					</div>
				</div>

				<form onSubmit={(e) => handleSubmit(e)} action="">
					<input
						type="text"
						placeholder="Name"
						onChange={(e) => setAuthor(e.target.value)}
						value={author}
					/>
					<textarea
						style={{
							border: error
								? "4px solid red"
								: "border-image: 1px solid $colorSpecial",
						}}
						placeholder="Message"
						onChange={(e) => setContent(e.target.value)}
						value={content}
					/>
					{error && <p>Veuillez écrire un minimum de 20 caractères</p>}
					<input type="submit" value="envoyer" />
				</form>
			</div>
		</div>
	);
};

export default Testimony;
