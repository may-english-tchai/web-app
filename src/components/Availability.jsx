import "../assets/styles/availability.scss";
import Button from "./elements/Button";
import { useState } from "react";

const Availability = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        backgroundColor: isHover ? "#FD81AB" : "white",
        color: "black",
        border: "1px solid black"
    };

    return (
    <div className="availability w-full h-full">
        <div id="title" className="w-full mt-20">
        <hr /> <h2>MAKE YOUR RESERVATION</h2> <hr />
        </div>

    <div className="box">
        <div id="scrollable">
        <div id="sous-titre">
            <h4>Quelles sont vos disponibilités ?</h4>
        </div>

        <div className="card">
            <p>Date</p>
            <p>Heure</p>
            <div className="location">
            <p>Lieu</p>
            <img src="/img/lieu.png" alt="lieu" />{" "}
            </div>
            <p>Langue</p>
        </div>
        </div>
    </div>
    <div id="availability_button">
        <Button
        style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        Booking
        </Button>
    </div>
    </div>
);
};

export default Availability;
