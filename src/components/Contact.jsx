import "../assets/styles/contact.scss";
import Button from "./elements/Button";
import Title from "./elements/Title";
import { api } from "../store/http";
import toast from "react-hot-toast";

const handleSubmit = (e) => {
	e.preventDefault();
	const form = e.target;
	const formData = new FormData(form);

	api
		.post("/contacts", formData)
		.then(() => {
			toast("Votre Message a bien été envoyé \n Your Message has been sent", {
				icon: "😉",
				style: {
					border: "1px solid #2C7A35",
					padding: "16px",
					color: "#2C7A35",
				},
			});
		})
		.catch(() => {
			toast("Une erreur s'est produite lors de l'envoi du message.", {
				icon: "🙁",
				style: {
					border: "1px solid #C71610",
					padding: "16px",
					color: "#C71610",
				},
			});
		});
};

const Contact = () => {
	return (
		<div id="contact-section" className="contact">
			<div id="contact-container" className="h-screen">
				<Title text="Contact" textColor="#FD6C9E" hrColor="#FD6C9E" />

				<div className="contact-box">
					<form onSubmit={handleSubmit} method="post">
						<div className="form-item">
							<input id="name" type="text" name="sender" required />
							<label className="contact-label" htmlFor="name">
								Nom
							</label>
						</div>

						<div className="form-item">
							<input id="email" type="text" name="email" required />
							<label className="contact-label" htmlFor="email">
								E-mail
							</label>
						</div>

						<div className="form-item">
							<input id="phone" type="text" name="sender" required />
							<label className="contact-label" htmlFor="phone">
								Téléphone
							</label>
						</div>

						<div className="form-item">
							<textarea
								name="content"
								id="message"
								cols="30"
								rows="5"
								required
							/>
							<label className="contact-label" htmlFor="message">
								Message
							</label>
						</div>

						<div className="form-item">
							<Button type="submit" className="submit-btn">
								Envoyer
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
