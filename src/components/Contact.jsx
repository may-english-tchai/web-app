import "../assets/styles/contact.scss";
import Button from "./elements/Button";

const Contact = () => {
	return (
		<div className="contact">
			<div id="contact-container" className="h-screen">
				<div id="title" className="w-full">
					<hr /> <h2>Contact</h2> <hr />
				</div>

				<div className="contact-box">
					<form method="post">
						<div className="form-item">
							<input id="name" type="text" name="sender" required />
							<label htmlFor="name">Name</label>
						</div>

						<div className="form-item">
							<input id="email" type="text" name="email" required />
							<label htmlFor="email">Email</label>
						</div>

						<div className="form-item">
							<input id="phone" type="text" name="sender" required />
							<label htmlFor="phone">Phone</label>
						</div>

						<div className="form-item">
							<textarea
								name="message"
								id="message"
								cols="30"
								rows="5"
								required
							/>
							<label htmlFor="message">Message</label>
						</div>

						<div className="form-item">
							<Button type="submit" className="submit-btn">
								Send
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
