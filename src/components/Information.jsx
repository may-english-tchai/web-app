import "../components/elements/Button"
import Button from "../components/elements/Button";

const Information = () => {
  return (
    <>
      <div className="Information flex relative justify-center items-center">
        <div className="menu-information flex flex-col text-center items-center absolute">
          <div className="title flex">
            <hr />
            <h2>MAKE YOUR RESERVATION</h2>
            <hr />
          </div>
          <form>
            <div className="formular">
              <label htmlFor="name">Nom :</label>
              <br />
              <input type="text" id="name" placeholder="Nom" />
            </div>

            <div>
              <label htmlFor="email">Prénom :</label>
              <br />
              <input type="text" id="firstname" placeholder="Prénom" />
            </div>

            <div>
              <label htmlFor="password">Téléphone :</label>
              <br />
              <input type="tel" id="phone" placeholder="Téléphone" />
            </div>

            <div>
              <label htmlFor="message">Email :</label>
              <br />
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
              <label htmlFor="language">Langue</label>
              <br />
              <select>
                <option value="A0">A0 - Le débutant absolu</option>
                <option value="A1"> A1 -Utilisateur élémentaire</option>
                <option selected value="A2">
                  A2 - Utilisateur élémentaire / Faux débutant
                </option>
                <option value="B1"> B1 - Utilisateur indépendant</option>
                <option value="B2">B2 -Utilisateur indépendant (anglais courant)</option>
                <option value="C1">C1 - Niveau d&apos;anglais avancé - Utilisateur expérimenté</option>
                <option value="C2">C2 - Utilisateur expérimenté</option>
                
              </select>
              <Button/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Information;
