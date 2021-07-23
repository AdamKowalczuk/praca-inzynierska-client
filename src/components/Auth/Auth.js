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
import GoogleIcon from "../../images/google.svg";
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
    console.log(form);
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
                    label="Imię"
                    handleChange={handleChange}
                    autoFocus
                    type="input"
                    className="first-name"
                  />
                  <Input
                    name="lastName"
                    label="Nazwisko"
                    handleChange={handleChange}
                    type="input"
                    className="last-name"
                  />
                </div>
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Hasło"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />

            {isSignup && (
              <Input
                name="confirmPassword"
                label="Powtórz hasło"
                handleChange={handleChange}
                type="password"
              />
            )}
          </div>
          {isSignup === true ? (
            <Button2
              type="submit"
              text="ZAREJESTRUJ SIĘ"
              class="btn btn_white"
            ></Button2>
          ) : (
            <Button2
              type="submit"
              text="ZALOGUJ SIĘ"
              class="btn btn_white"
            ></Button2>
          )}

          <GoogleLogin
            clientId="1059000716878-tdrbkt42bqtungoq080mht743uu0vf04.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                variant="contained"
                startIcon={
                  <>
                    <img
                      src={GoogleIcon}
                      className="google-icon"
                      alt="Google Icon"
                    />
                  </>
                }
              >
                Użyj konta Google
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button
                onClick={switchMode}
                style={{ color: "#f1f1f2", textTransform: "none" }}
              >
                {isSignup
                  ? "Masz już konto? Zaloguj się"
                  : "Nie masz jeszcze konta? Zarejestruj się"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
};

export default SignUp;
