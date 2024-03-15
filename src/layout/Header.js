import { Link } from "react-router-dom";

function Header(){

    //JSX문법
    return(
        <>
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <ul className="nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/board/list" className="nav-link active">Board</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;