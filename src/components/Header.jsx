import React from "react";
import "./Header.css";
import { FaLink, FaQuestionCircle } from "react-icons/fa";

const Header = ({ hideIcons }) => {
  return (
    <header className="header">
      <div className="header-left">WELLS FARGO</div>
      {!hideIcons && (
        <div className="header-right">
          <FaLink className="header-icon" title="Quick Link" />
          <FaQuestionCircle className="header-icon" title="Help" />
        </div>
      )}
    </header>
  );
};

export default Header;
