import { api } from "../../store/http";
import { useState } from "react";

const Form = () => {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		api.post("/testimonies", {
			name,
			content,
		});
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)} action="">
			<input
				type="text"
				name="name"
				placeholder="Name"
				minLength={3}
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<textarea
				style={{
					border: "border-image: 1px solid $colorSpecial",
				}}
				placeholder="Message"
				name="content"
				minLength={20}
				onChange={(e) => setContent(e.target.value)}
				value={content}
			/>

			<input type="submit" value="envoyer" />
		</form>
	);
};

export default Form;
