import React from 'react';

function ContactRow(props){
const user = props.user;
return(
<tr>
<td>{user.name}</td>
<td>{user.phone}</td>
<td>{user.email}</td>
</tr>
)

}

export default ContactRow;