import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button2 from "../Button/Button";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { Button, Grid } from "@material-ui/core";
import { signin, signup } from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import useStyles from "./styles";
import Input from "./Input";
import GoogleIcon from "./icon";
import SecureLogin from "../../images/secure_login.svg";
import "./auth.scss";
import "./input.scss";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  courses: "",
};

const SignUp = () => {
  const courses = useSelector((state) => state.courses);

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  // function

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.courses = courses;
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      console.log("Success");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () =>
    alert("Google Sign In was unsuccessful. Try again later");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            {isSignup ? null : <img src={SecureLogin} alt="Secure Login" />}
            {isSignup && (
              <>
                <div className="input-container">
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    color="#f1f1f2"
                    type="input"
                    className="first-name"
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    type="input"
                    className="last-name"
                  />
                </div>
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </div>
          <Button2 type="submit" text="SIGN IN" class="btn btn_white"></Button2>
          <GoogleLogin
            clientId="1059000716878-tdrbkt42bqtungoq080mht743uu0vf04.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
                startIcon={<GoogleIcon />}
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} style={{ color: "#f1f1f2" }}>
                {isSignup
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default SignUp;
