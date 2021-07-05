// import React from "react";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// const Input = (props) => {
//   return (
//     <div className="form__group field">
//       {props.name === "password" ? (
//         <div className="password-icon" onClick={props.handleShowPassword}>
//           {props.type === "password" ? <Visibility /> : <VisibilityOff />}
//         </div>
//       ) : null}

//       <input
//         type={props.type}
//         className="form__field"
//         placeholder={props.placeholder}
//         name={props.name}
//         required
//       />

//       <label for="name" className="form__label">
//         {props.label}
//       </label>
//     </div>
//   );
// };

// export default Input;

import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";

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
