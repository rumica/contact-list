import React, { useState } from 'react';
import './List.css'

function List({ contacts, setContacts }) {

  const [filteredText, setFilteredText] = useState([])

  const filtered = contacts.filter(item => {
    return Object.keys(item).some(key => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filteredText.toString().toLowerCase())
    })
  })

  const handleDelete = (id) => {
    const newList = filtered.filter((item) => item.phone_number !== id);
    setContacts(newList)
  }


  return (

      <div className="main-list-container">
        <input 
        value={filteredText}
        placeholder="Filter Contacts"
        onChange={(e) => setFilteredText(e.target.value)}
        />
        <div className="list-container">
            <ul>
              {
                filtered.map((contact, i) => (
                 <div key={i} className="items">
                    <div className="telephone-items">
                      <li  className="fullname">{contact.fullname}</li>
                      <li className="phone-number" >{contact.phone_number}</li>
                    </div>
                    <button onClick={() => handleDelete(contact.phone_number)}>Delete</button>
                  </div>             
                ))
              }
            </ul>
        </div>
        <p>Total Contacts {filtered.length}</p>
      </div>
  );
}

export default List;
