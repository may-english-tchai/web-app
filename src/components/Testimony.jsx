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
          testimonies {
            edges {
              node {
                id
                name
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
			<div id="testimony-container" className="h-screen">
				<Title text="Temoignage" textColor="#FD6C9E" hrColor="#FD6C9E" />

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
					{error && <p>Veuillez ecrire un minimum de 20 caractère</p>}
					<input type="submit" value="envoyer" />
				</form>
				<ul>
					{testimonyData.map((testimony) => (
						<li key={testimony.id}>
							<h3>{testimony.name}</h3>
							<p>{testimony.subject}</p>
							<p>{testimony.content}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Testimony;
