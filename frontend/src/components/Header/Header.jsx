import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite mukhwas here</h2>
        <p>
          Choose from a diverse menu featuring a detectable array of mukhwas
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your post dining
          experience, one delicious mukhwas at a time.
        </p>
        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div>
  );
};

export default Header;
