import React, { useState, useEffect } from 'react';
import List from './List/List';
import Form from './Form/Form';
import './Contacts.css'

function Contacts() {

  const [contacts, setContacts] = useState([
    {
      fullname: 'Hermione Granger',
      phone_number: '0333 123 4566'
    },

    {
      fullname: 'Harry Potter',
      phone_number: '0555 555 5555'
    },

    {
      fullname: 'Ron Weasley',
      phone_number: '0444 566 7888'
    },
  ])

  useEffect(() => {
    console.log(contacts)
  }, [contacts])

  return (
      <div className="main-container">
        <Form contacts={contacts} addContact={setContacts}/>
        <List contacts={contacts} setContacts={setContacts}/>
      </div>
  )
}

export default Contacts;
