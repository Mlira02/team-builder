import React, { useState } from 'react';
import Current from './Current';
import './App.css';


function App() {

const [member, setMember] = useState({ name:"" , email:"" , role:""});

function handleChange(e) {
  const updatedMember = {...member , [e.target.name] : e.target.value}
  setMember(updatedMember)
  console.log(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
  console.log(member)
  setMember({ name:'' , email:'' , role:''});
}

  return (
    <div className="App">
      <h1>Team-Member Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
        placeholder="Name"
        type='text'
        name='name'
        onChange={handleChange}
        value={member.name}
        />
        <input 
        placeholder="Email Here"
          type='email'
          name='email'
          onChange={handleChange}
          value={member.email}
        />
        <input 
          placeholder="Role Here"
          type='text'
          name='role'
          onChange={handleChange}
          value={member.role}
        />
        <button type="submit">Submit Info</button>
      </form>
      <Current member={member} />
    </div>
  );
}

export default App;
