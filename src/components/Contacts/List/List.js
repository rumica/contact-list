import React, { useState } from 'react';
import './List.css'

function List({ contacts }) {

  const [filteredText, setFilteredText] = useState([])

  const filtered = contacts.filter(item => {
    return Object.keys(item).some(key => {
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filteredText.toString().toLowerCase())
    })
  })



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
                    <li  className="fullname">{contact.fullname}</li>
                    <li className="phone-number" >{contact.phone_number}</li>
                  </div>
                ))
              }
            </ul>
        </div>
      </div>
  );
}

export default List;
