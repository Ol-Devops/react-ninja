import Lhome from "./pages/Lhome";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Nav = () => {
  return (
    <div style={{ marginLeft: "2rem", marginTop: "30px" }}>
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "4rem" }}>
          <Link to="/">Home</Link>
          <Link to="/location">Location</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/ledger">Ledger</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
