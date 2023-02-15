import React from "react";
import { ContactRow } from "./";

function ContactList(props) {
  const contacts = props.contacts;
  const selectContact = props.selectContact;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>

          {contacts.map((user, idx) => {
            return (
              <ContactRow
                key={"user index: " + idx}
                user={user}
                selectContact={selectContact}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ContactList;
