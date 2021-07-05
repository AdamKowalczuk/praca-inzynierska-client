import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";

import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "./input.scss";
const Input = (props) => {
  return (
    <TextField
      name={props.name}
      onChange={props.handleChange}
      className={props.className}
      variant="outlined"
      required
      label={props.label}
      autoFocus={props.autoFocus}
      type={props.type}
      color="red"
      InputProps={
        props.name === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={props.handleShowPassword}>
                    {props.type === "password" ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default Input;
