import "../assets/styles/payment.scss";
import Button from "./elements/Button";

const Payment = () => {
    return (
        <div className="Payment">
            <div id="relative">
                <div style={{ backgroundColor: "#EDD8A8" }} id="divOne">
                    <h2><hr></hr>PAIEMENT/PAYMENT<hr></hr></h2>
                    <div id="para">
                        <h3>Récapitulatif - Overview </h3>
                        <p>Nous sommes ravis de vous aider à apprendre l&apos;anglais autour d&apos;un café
                            lors de notre rencontre confirmée pour :<br></br>
                            Lundi 25  Mars 2023 à 14h00<br></br>
                            Lundi 25 March 2023 at 2:00 PM<br></br>
                            Veuillez confirmer ces informations avant de procéder au paiement</p>

                        <div className="grid">
                          <Button type="submit">VALIDER</Button>
                        </div>
                        <div className="horizontal-line"></div>
                        <div className="vertical-line"></div>

                    </div>
                    <div style={{ backgroundImage: "url('/img/discussion2.png')" }} id="discussion"></div>

                </div>
                <div style={{ backgroundImage: "url('/img/pexels.png')" }} id="bg">
                </div>


            </div>
        </div>
    );
};

export default Payment;
