import React, { useState, useEffect } from "react";
import dummyContacts from "../dummyData";
import { ContactList } from "./";

const Main = () => {
  const [contacts, setContacts] = useState([]);
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
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>

      <div id="container">
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
};

export default Main;
