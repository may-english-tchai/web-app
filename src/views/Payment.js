import React from "react";
import "../styles/components/_payment.scss";

const Payment = () => {
    return (
        <div className="Payment">
            <div id="relative">
                <div style={{ backgroundColor: "#EDD8A8" }} id="divOne">
                    <h2><hr></hr>PAIEMENT/PAYMENT<hr></hr></h2>

                </div>
                <div style={{ backgroundImage: "url('/img/pexels.png')" }} id="bg">
                    <div id="para">
                        <h3>Récapitulatif - Overview </h3>
                        <p>Nous sommes ravis de vous aider à apprendre l'anglais autour d'un café
                            lors de notre rencontre confirmée pour :
                            Lundi 25  Mars 2023 à 14h00
                            Lundi 25 March 2023 at 2:00 PM
                            Veuillez confirmer ces informations avant de procéder au paiement</p>
                            <button>VALIDER</button>
                        <div class="vertical-line"></div>
                        
                    </div><div style={{ backgroundImage: "url('/img/discussion2.png')" }} id="discussion"></div>

                </div>


            </div>
        </div>
    );
};

export default Payment;