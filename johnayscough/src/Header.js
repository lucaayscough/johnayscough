import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="name">JOHN AYSCOUGH</h1>

      <nav>
        <ul className="links">
          <li><Link to="/painting/001">Painting</Link></li>
          <li><Link to="/sculpture/001">Sculpture</Link></li>
          <li><Link to="/ots/001">On the streets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;