import { useEffect, useState } from "react";
import "../assets/styles/testimony.scss";
import axios from "axios";
import Article from "../assets/styles/article.scss?inline";

const Testimony = () => {
	const [testimonyData, setTestimonyData] = useState([]);
	const [author, setAuthor] = useState("");
	const [content, setContent] = useState("");
	const [error, setError] = useState(false);
	const getData = () => {
		axios
			.get("http://localhost:3004/articles")
			.then((res) => setTestimonyData(res.data));
	};
	useEffect(() => getData(), []);

	const handleSubmit = (e) => {
		//fonction qui evite le rechargement de page à chaque fois qu'on soumet une requete
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
			getData();
		}
	};
	return (
		<div className="testimony">
			<div id="title">
				<hr /> <h2>TEMOIGNAGE</h2> <hr />
			</div>
			<ul>
				{testimonyData
					.sort((a, b) => b.date - a.date)
					.map((article) => (
						<Article key={article.id} article={article} />
					))}
			</ul>
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
		</div>
	);
};

export default Testimony;
