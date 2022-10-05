import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const menu = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value
      navigate(`/?q=${keyword}`)
    }
  };
  return (
    <div>
      <div className="login-button">
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className="login_icon" onClick={gotoLogin}>
          LOGIN
        </div>
      </div>
      <div className="logo">
        <img
          width={90}
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1968-1999.png"
        />
      </div>
      <div>
        <ul className="item_map">
          {menu.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <div className="search-input">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
