import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import classes from "./Header.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          <div className={classes.header_container}>
            <div className={classes.logo_container}>
              {/* logo */}
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>
              <div className={classes.delivery}>
                {/* delivery */}
                <span>
                  <CiLocationOn />
                </span>
                <div>
                  <p>Delivered to</p>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
            {/* search */}
            <div className={classes.search}>
              <select name="" id="">
                <option value="all">All</option>
              </select>
              <input type="text" name="" id="" placeholder="search product" />
              {/* icon */}
              <FaSearch />
            </div>
            {/* right side link */}
            <div className={classes.order_container}>
              <Link to="" className={classes.language}>
                <img
                  src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                  alt=""
                />
                <section>
                  <option value="en">EN</option>
                </section>
              </Link>
              {/* three components */}
              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email.split("@")[0]}</p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello ,Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>
              <Link to="/orders">
                <div>
                  <p>Returns</p>
                  <span>$Orders</span>
                </div>
              </Link>
              {/* orders */}
              <Link to="/cart" className={classes.cart}>
                {/* cart */}
                <div>
                  {/* icon */}
                  <ShoppingCartIcon />

                  <span>{totalItem}</span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
