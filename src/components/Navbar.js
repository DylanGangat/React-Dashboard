import { Link } from "react-router-dom";
// Styles
import "./Navbar.scss";

// Images

import Logo from "../assets/bOnline-logo.svg";
import UserImage from "../assets/person1.jpg";

// Icons

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Navbar() {
  return (
    <header className="primary-header">
      <div className="container">
        <nav className="main-nav">
          <Link to="/">
            <img src={Logo} alt="bOnline logo" className="logo" />
          </Link>
          <div className="user-info">
            <div className="notification">
              <NotificationsNoneOutlinedIcon className="icon" size="xl" />
            </div>

            <div className="user-profile">
              <img
                src={UserImage}
                alt="the users profile pic"
                className="profile-image"
              />
              <div className="user-details">
                <div>
                  <p className="name">Ruth Sage</p>
                  <p className="email">ruthsage@bonline.com</p>
                </div>
                <KeyboardArrowDownRoundedIcon className="down-arrow"/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
