import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <MenuIcon />
          <p>All</p>
        </li>
        <li>Today's Deals</li>
        <li>Costumer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
