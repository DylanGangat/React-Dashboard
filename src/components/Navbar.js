import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

// Styles
import "./Navbar.scss";

// Images

import Logo from "../assets/bOnline-logo.svg";
import UserImage from "../assets/person1.jpg";

// Icons

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

export default function Navbar() {
  const url = useState("http://localhost:8000/users");
  const { data } = useFetch(url);

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

            {data && (
              <div className="user-profile" key={data[0].account_id}>
                <img
                  src={UserImage}
                  alt="the users profile pic"
                  className="profile-image"
                />
                <div className="user-details">
                  <div>
                    <p className="name">{data[0].first_name}</p>
                    <p className="email">
                      {data[0].first_name + data[0].last_name + "@bonline.com"}
                    </p>
                  </div>
                  <KeyboardArrowDownRoundedIcon className="down-arrow" />
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
