import React from 'react';

function SingleContact(props){
    const contact = props.selectedContact;
    console.log(contact, 'contact')
return(
    <div id="single-contact">
    <div id="contact-info">
        <p><b>Name:</b> {contact.name}</p>
        <p><b>Email:</b> {contact.email}</p>
        <p><b>Phone:</b> {contact.phone}</p>
        <div>
            <b>Address: </b>
            <p>
                <b>Street:{contact.address.street}</b> 
                <br />
                <b>City/State: {contact.address.city}</b> 
            </p>
        </div>
        <p><b>Company:</b> {contact.company.name}</p>
    </div>
</div>
)
}

export default SingleContact;