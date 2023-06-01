/* eslint-disable react/no-unescaped-entities */
import "../assets/styles/reservation.scss";

const Reservation = () => {
return (
    <div className="reservation">
    <div id="title">
        <hr /> <h2>Reservation</h2> <hr />
    </div>

    <div>
        <p>
        Réservez votre table et découvrez comment maîtriser rapidement
        l'anglais. <br />
        Nous vous offrons une expérience inoubliable et des leçons
        qui vous permettront d'améliorer votre anglais et de le pratiquer avec
        des personnes qui partagent la même passion. Réservez votre table
        maintenant et commencez à parler anglais !
        </p>

        <div id="reserver">
        <button>Reserver</button>
        <img id="pictureReservation"  src="/img/Reservez.png" alt="conversation" />
        </div>
    </div>
    </div>
);
};

export default Reservation;