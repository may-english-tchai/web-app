import React from "react";
import "../styles/components/_reservation.scss";

const Reservation = () => {
return (
    <div className="reservation">
    <h2>Reservation</h2>
    <div>
        <p>
        Réservez votre table et découvrez comment maîtriser rapidement
        l'anglais. Nous vous offrons une expérience inoubliable et des leçons
        qui vous permettront d'améliorer votre anglais et de le pratiquer avec
        des personnes qui partagent la même passion. Réservez votre table
        maintenant et commencez à parler anglais !
        </p>
        <button>Reserver</button>
        <img src="/Reservez.png" alt="conversation" />
    </div>
    </div>
    );
};

export default Reservation;
