import React, { useState } from "react";
import dummyContacts from "../dummyData";

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>

      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>

            {contacts.map((user, idx) => {
              return (
                <tr key={"user index: " + idx}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
