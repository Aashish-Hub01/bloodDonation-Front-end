import React, {useState} from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { RiHome2Line, RiUserShared2Line, RiHistoryLine, RiLogoutBoxLine, RiQuestionLine } from "react-icons/ri";
import './HamburgerMenu.css'

const HamburgerMenu = (props) => {
    return (
      <Menu {...props}>
        <a className="menu-item" href="/">
          <RiHome2Line className="icon" />
          HOME
        </a>

        <a className="menu-item" href="/eligibility">
          <RiUserShared2Line className="icon" />
          Eligibility
        </a>
  
        {/* <Link to="/eligibility">
          <RiUserShared2Line className="icon" />
          Eligibility
        </Link> */}
  
        <a className="menu-item" href="/requested-history">
          <RiHistoryLine className="icon" />
          REQUESTED history
        </a>
  
        <a className="menu-item" href="/donation-history">
          <RiHistoryLine className="icon" />
          Donation history
        </a>
  
        <a className="menu-item" href="/logout">
          <RiLogoutBoxLine className="icon" />
          Logout
        </a>
  
        <a className="menu-item" href="/faq">
          <RiQuestionLine className="icon" />
          FAQ
        </a>
      </Menu>
    );
  };
  
  export default HamburgerMenu;
  
