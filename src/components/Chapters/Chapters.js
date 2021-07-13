import React from "react";
import "./chapters.scss";
import Nav from "../Nav2/Nav2";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Password from "../../images/programming-icons/001-password.svg";
import Server from "../../images/programming-icons/002-server.svg";
import Wall from "../../images/programming-icons/003-wall.svg";
import Code from "../../images/programming-icons/004-code.svg";
import Security from "../../images/programming-icons/005-security.svg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Chapter = (props) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordion-img-background">
            <img src={props.icon} alt="password" />
          </div>
          <div className="accordion-chapter-header">
            <h3>HTML Introduction</h3>
            <h4>2/3 Completed</h4>
          </div>

          {/* <Typography className="accordion-heading">
            HTML Introduction
          </Typography>
          <Typography className="accordion-heading">2/3 Completed</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-lesson-container">
            <h5>HTML Introduction</h5>
            <ArrowForwardIosIcon className="accordion-arrow-forward" />
          </div>

          <div className="accordion-lesson-container">
            <h5>HTML Introduction</h5>
            <ArrowForwardIosIcon className="accordion-arrow-forward" />
          </div>
          <div className="accordion-lesson-container">
            <h5>HTML Introduction</h5>
            <ArrowForwardIosIcon className="accordion-arrow-forward" />
          </div>
          <div className="accordion-lesson-container">
            <h5>HTML Introduction</h5>
            <ArrowForwardIosIcon className="accordion-arrow-forward" />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const Chapters = () => {
  return (
    <>
      <Nav />
      <div className="chapters-container">
        <Chapter icon={Password} />
        <Chapter icon={Server} />
        <Chapter icon={Wall} />
        <Chapter icon={Code} />
        <Chapter icon={Security} />
      </div>
    </>
  );
};

export default Chapters;
