import React, { useState } from "react";
import { SingleView } from "./";

function ContactRow(props) {
  const user = props.user;
  const selectContact = props.selectContact;
//   const [selectedUser, setSelectedUser] = useState(``);

//   function handelClick() {
//     if (selectedUser != user.name) {
//       console.log("no single view");
//     }
//     return selectedUser === user.name ? <SingleView user={user} /> : null;
//   }

  return (
    <tr
      onClick={() => {
        selectContact(user.id);      
      }}
    >
      <td>{user.name}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
    </tr>
  );
}

export default ContactRow;
