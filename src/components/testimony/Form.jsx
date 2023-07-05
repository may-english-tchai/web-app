import { api } from "../../store/http";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (content.length < 20) {
			setError(true);
		} else {
			api.post("/testimonies", {
				name,
				content,
			});
			setError(false);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} action="">
			<input
				type="text"
				name="name"
				placeholder="Name"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<textarea
				style={{
					border: error
						? "4px solid red"
						: "border-image: 1px solid $colorSpecial",
				}}
				placeholder="Message"
				name="content"
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>
			{error && <p>Veuillez écrire un minimum de 20 caractères</p>}
			<input type="submit" value="envoyer" />
		</form>
	);
};

export default Form;
