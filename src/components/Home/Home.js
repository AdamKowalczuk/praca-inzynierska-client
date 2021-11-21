import React, { useState, useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import TravelingImage from "../../images/traveling.svg";
import Webfront from "../../images/Webfront-svg.svg";
import Dots from "./Dots";
import Navbar from "../Navbar/Navbar";

import "./home.scss";

import { useHistory, useLocation } from "react-router-dom";

import decode from "jwt-decode";

import * as actionType from "../../constants/actionTypes";

const Home = () => {
  // const [currentId] = useState(0);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

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
    <>
      <Navbar />
      <div className="home-container">
        <div className="title center ">WebFront</div>
        <img src={TravelingImage} alt="Traveling" width="640" height="360" />
        {/* <img src={Webfront} alt="Traveling" width="640" height="360" /> */}
        <Dots />
      </div>
    </>
  );
};

export default Home;
