import "../assets/styles/contact.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <div id="contact-container">
                <div id="title">
                    <hr /> <h2>Contact</h2> <hr />
                </div>

                <div className="contact-box">
                    <form>
                        <div className="form-item">
                            <input type="text" name="sender" required />
                            <label>Name</label>
                        </div>

                        <div className="form-item">
                            <input type="text" name="email" required />
                            <label>Email</label>
                        </div>

                        <div className="form-item">
                            <input type="text" name="sender" required />
                            <label>Phone</label>
                        </div>

                        <div className="form-item">
                            <textarea name="message" id="" cols="30" rows="5" required></textarea>
                            <label>Message</label>
                        </div>

                        <div className="form-item">
                            <button className="submit-btn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
