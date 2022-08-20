import React, { useState } from 'react';
import './styles/signup.css'
import polygon from './assets/Polygon.png'
import { Link } from 'react-router-dom';


function SignUp() {
  const style = {
    backgroundImage: `url(${polygon})`,
  }

  const [userRegistration, setUserRegistration] = useState({
    username: '',
    phonenumber: '',
    email: '',
    password: '',
    confirm_password: '',
    role: 'Default',
  });

  const [records, setRecords] = useState([])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, ": ", value);
    setUserRegistration({ ...userRegistration, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecords = { ...userRegistration, id: new Date().getTime().toString() }

    setRecords([...records, newRecords]);
    setUserRegistration()

  }

  return (
    <>
      <div className="container-signup" style={style}>
        <h1 id='sign-up'>Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <input required value={userRegistration.username} onChange={handleChange} name='username' id='username' type="text" placeholder='Name' autoFocus /><i className="fa-solid fa-user"></i>
          <input required value={userRegistration.phonenumber} onChange={handleChange} name='phonenumber' id='phonenumber' type="tel" placeholder='Phone Number' pattern="[0-9]{10}" /><i className="fa-solid fa-mobile-screen"></i>
          <input required value={userRegistration.email} onChange={handleChange} name='email' id='email' type="email" placeholder='Email' /><i className="fa-solid fa-envelope"></i>
          <input required value={userRegistration.password} onChange={handleChange} name='password' id='password' type="password" placeholder='Create Password' /><i className="fa-solid fa-eye"></i>
          <input required value={userRegistration.confirm_password} onChange={handleChange} name='confirm_password' id='confirm_password' type="password" placeholder='Re Enter Password' /><i className="fa-solid fa-key"></i>
          <div className="custom-select">
            <select id='role' onChange={handleChange} name='role' defaultValue={'Default'}>
              <option value="Default" disabled>Select Role</option>
              <option value="Parent">Parent</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Staff">Staff</option>
            </select><i className="fa-solid fa-sort-down"></i>
          </div>
          <button id='next' className='NEXT' type='submit' >NEXT</button>
        </form>
        <div className="back"><Link to='/login' style={{ textDecoration: 'none' }} ><i className="fa-solid fa-circle-left"></i></Link></div>
      </div>
    </>
  )
}

export default SignUp