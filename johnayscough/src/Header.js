import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 class="name">JOHN AYSCOUGH</h1>

      <nav>
        <ul class="links">
          <li><Link to="/painting">Painting</Link></li>
          <li><Link to="/sculpture">Sculpture</Link></li>
          <li><Link to="/ots">On the streets</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;