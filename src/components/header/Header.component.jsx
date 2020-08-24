import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
  const currentUserState = currentUser ? (
    <div className="option" onClick={() => auth.signOut()}>
      SIGN OUT
    </div>
  ) : (
    <Link className="option" to="/signin">
      SIGN IN
    </Link>
  );

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUserState}
      </div>
    </div>
  );
};

export default Header;
