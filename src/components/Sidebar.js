import { Link } from "react-router-dom";

// Styles
import "./Sidebar.scss";

// Icons

import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Sidebar() {
  return (
    <>
      <nav className="side-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              {" "}
              <HomeOutlinedIcon className="icon"/>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <CreditCardOutlinedIcon className="icon"/> <span>Billing</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
