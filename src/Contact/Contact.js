import React from "react";
import PropTypes from "prop-types";
import classes from "./Contact.module.css";

const Contact = ({ name, number, deleteContact }) => {
  return (
    <>
      {name}: {number}
      <button onClick={deleteContact} className={classes.button}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
