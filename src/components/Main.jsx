import React, { useState, useEffect } from "react";
import dummyContacts from "../dummyData";
import { ContactList } from "./";
import SingleContact from "./SingleContact";

const Main = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState({});
  const BASE = "http://jsonplace-univclone.herokuapp.com/users";

  const getContacts = async () => {
    try {
      let response = await fetch(BASE);
      let result = await response.json();
      setContacts(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  async function selectContact(contactId, favoriteData) {
    console.log(contactId);
    const response = await fetch(`${BASE}/${contactId}`);
    const result = await response.json();
    setSelectedContact({ ...result, ...favoriteData });
  }

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>

      <div id="container">
        {selectedContact.id ? (
          <SingleContact
            selectContact={selectContact}
            selectedContact={selectedContact}
          />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
        {/* <ContactList contacts={contacts} selectContact={selectContact}/> */}
      </div>
    </div>
  );
};

export default Main;
