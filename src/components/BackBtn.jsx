import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BackBtn = () => {
  return (
    <div>
      <Link to="/">
        <BiArrowBack
          style={{
            fontSize: "1.5rem",
            color: "#1976d2", // blue
            borderRadius: "50%",
            cursor: "pointer",
            verticalAlign: "middle",
            transition: "color 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 12px 2px rgba(100,181,246,0.5)"; // light blue glow
            e.currentTarget.style.color = "#64b5f6"; // light blue
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.color = "#1976d2"; // revert to blue
          }}
        />
      </Link>
    </div>
  );
};

export default BackBtn;
