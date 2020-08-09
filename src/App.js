import classes from "./App.module.css";

import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  Rename = (e) => {
    const value = e.target.value;
    this.setState({ filter: value });
  };

  addContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  deleteContact = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    const { contacts, filter } = this.state;
    const filterContacts = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
    return (
      <>
        <h1 className={classes.titleName}>Phonebook</h1>
        <ContactForm submitForm={this.addContact}></ContactForm>
        <h2 className={classes.minTitleName}>Contacts</h2>
        <Filter filter={filter} onRename={this.Rename}></Filter>
        <h2 className={classes.minTitleName}>Contacts List</h2>
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
