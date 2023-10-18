import React, { useState } from 'react';
function Form({ onSubmit }) {
    // Declare state variables to store form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any necessary form validation or data processing here
      // You can access the form input values from the state variables (name, email, message)
      console.log('Form submitted:', { name, email, message });
      onSubmit();
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ height:'800px', width:'200px', marginLeft: '100px'}}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
  
  export default Form;
  