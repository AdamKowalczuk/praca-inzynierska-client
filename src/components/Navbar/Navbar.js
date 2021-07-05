import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import ButtonRight from "../Button/ButtonRight";

import * as actionType from "../../constants/actionTypes";
import useStyles from "./styles";

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push("/auth");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    // <AppBar className={classes.appBar} position="static" color="inherit">
    //   <Toolbar className={classes.toolbar}>
    <>
      {user?.result ? (
        <div className={classes.profile}>
          <Button
            variant="contained"
            className={classes.logout}
            color="secondary"
            onClick={logout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/auth">
          <ButtonRight text="Next" class="btn btn_right" />
        </Link>
        // <Button
        //   style={{ position: "absolute", top: 0, right: 0 }}
        //   component={Link}
        //   to="/auth"
        //   variant="contained"
        //   color="primary"
        // >
        //   Sign In
        // </Button>
      )}
    </>
  );
};

export default Navbar;
