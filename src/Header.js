import {Link} from "react-router-dom";

function Header() {
  return (
    <header>
      <h1 className="name">JOHN AYSCOUGH</h1>

      <nav>
        <ul className="links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/painting">Painting</Link></li>
          <li><Link to="/sculpture">Sculpture</Link></li>
          <li><Link to="/ots">On the streets</Link></li>
          <li><Link to="/performance">Performance</Link></li>
          <li><a href="assets/portfolio.pdf">Portfolio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;