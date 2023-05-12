import React from "react";
import "../styles/components/_concept.scss";

const Concept = () => {
  return (
    <div className="Concept">
      <div id="relative">
        <div id="pinkdiv"><img src="img/cafe1.png" alt="cafe" /></div>
        <div id="presentation">
          <h2><hr />Concept<hr /></h2>
          <br />

          <h4>QU'EST-CE QUE MAY ENGLISH TCHAI ?</h4>
          <div id="para"><p>
            Plongez dans l'univers de l'apprentissage de l'anglais autour d'un café
            ou d'un thé.<br /> Dans un groupe de 3 personnes, apprenez tous les aspects de
            la langue et discutez en toute confiance.<br /> Une expérience unique,
            amusante et enrichissante !
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
