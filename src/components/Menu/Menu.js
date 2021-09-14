import React from "react";
import "./menu.scss";
import MenuIcon from "./icons/MenuIcon";
import BackIcon from "./icons/BackIcon";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
const Menu = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    console.log("Open");
    setOpen(true);
  };

  const handleClose = () => {
    console.log("Close");
    setOpen(false);
  };
  return (
    <>
      <div className="menu-container">
        {props.isColored === true ? (
          <>
            <Link to={props.link} rel="noreferrer" className="link">
              <BackIcon
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
              />
            </Link>

            <h3>{props.text}</h3>
            <MenuIcon
              primaryColor={props.primaryColor}
              secondaryColor={props.secondaryColor}
            />
          </>
        ) : (
          <>
            <Link
              to={props.link}
              rel="noreferrer"
              className="link"
              style={{ height: "50px" }}
            >
              <BackIcon primaryColor="#fff" />
            </Link>

            <h3>{props.text}</h3>
            <div className="menu-icon" onClick={() => handleOpen()}>
              <MenuIcon primaryColor="#fff" />
            </div>
          </>
        )}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className="modal">
            <CloseIcon
              className="close-icon"
              style={{
                color: props.primaryColor,
                backgroundColor: props.secondaryColor,
              }}
              onClick={() => handleClose()}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Menu;
