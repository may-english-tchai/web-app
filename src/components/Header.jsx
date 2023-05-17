import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="app-header">
            <nav>
                <Link to="/" className="my-text-big">Acceuil</Link>
            </nav>
        </header>
    )
}

export default Header;