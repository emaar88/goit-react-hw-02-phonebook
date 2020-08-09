import React from "react";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import classes from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={classes.container}>
      <ul>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <li key={contact.id} className={classes.li}>
              <Contact
                {...contact}
                deleteContact={() => deleteContact(contact.id)}
              />
            </li>
          ))
        ) : (
          <li className={classes.alert}>No have contacts!</li>
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
