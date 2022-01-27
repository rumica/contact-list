import React, { useState, useEffect } from 'react';
import './Form.css'

function Form({ contacts, addContact }) {

    const [form, setForm] = useState({ fullname: "", phone_number: "" })

    useEffect(() => {
        setForm({fullname: '', phone_number: ''})
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(form.fullname === '' || form.phone_number === '' ){
            return false
        }
        
        addContact([...contacts, form])
    }

  return (
      <form onSubmit={onSubmit}>
          <input 
          name="fullname" 
          value={form.fullname}
          placeholder="Fullname" 
          onChange={onChangeInput}/>

          <input 
          name="phone_number" 
          value={form.phone_number}
          placeholder="Phone Number" 
          onChange={onChangeInput}/>

          <button>Add</button>
      </form>
  );
}

export default Form;
