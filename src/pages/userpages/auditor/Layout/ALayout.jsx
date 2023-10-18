import { Link } from "react-router-dom";
import AMenu from "../Menu/AMenu";
//import Trending from "../Trending/Trending";
import "./ALayout.css";

const ALayout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout-left-container">
        <div className="layout-left">
          <AMenu />
        </div>
      </div>
      <div className="layout-content-container">{children}</div>
      {/* <div className="layout-right-container">
        <Trending />
      </div> */}
      {!localStorage.getItem("user") && (
        <footer>
          <Link to="/login">
            <button>Log in</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </footer>
      )}
    </div>
  );
};

export default ALayout;





