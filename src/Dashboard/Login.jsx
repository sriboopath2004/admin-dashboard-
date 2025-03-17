import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from './Assets/Logo.png';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !password) {
      setError('Please fill in both name and password');
    } else {
      console.log('Login successful', name, password);
      setName('');
      setPassword('');
      setError('');

      // Navigate to the next page (change "/dashboard" to your actual route)
      navigate('/Dashboard');
    }
  };

  return (
    <div>
      <nav style={{ backgroundColor: "#2b2c40", display: "flex", justifyContent: "baseline", paddingLeft: "4%", padding: "2%" }}>
        <img src={logo} alt="Logo" style={{ width: "100px", height: "50px" }} />
      </nav>
      <div style={{ backgroundColor: "#2b2c40", paddingTop: "1%", width: "98.9vw", height: "90.8vh", margin: "auto", marginTop: "-59px" }}>
        <div style={{ backgroundColor: "#373754", paddingTop: "1%", borderRadius: "3%", width: "25vw", height: "58vh", display: 'flex', flexDirection: "column", justifyContent: "start", margin: "auto", marginTop: "4.3%" }}>
          <h2 style={{ fontSize: "30px", color: "#ff3131", display: "flex", justifyContent: "center", paddingBottom: "3%", marginTop: "8.4%" }}>Welcome</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <label style={{ fontSize: "20px", color: "#ffffff", paddingRight: "16%", display: "flex", marginTop: "3.11%", justifyContent: "center", flexDirection: "column", width: "50%", fontFamily: "popp", margin: "auto" }}>
              Username:
              <br />
              <input type="text" value={name} style={{ marginTop: "2%", fontSize: "16px", cursor: "pointer", fontFamily: "poppins", width: "121%", height: "27px", paddingLeft: "10%", borderRadius: "7px" }} placeholder='Enter the Username' onChange={handleNameChange} />
            </label>
            <br />
            <label style={{ color: "#ffffff", display: "flex", fontSize: "20px", marginTop: "2%", paddingRight: "16%", justifyContent: "center", flexDirection: "column", width: "50%", fontFamily: "poppins", margin: "auto" }}>
              Password:
              <input type="password" value={password} style={{ marginTop: "2%", cursor: "pointer", fontSize: "16px", fontFamily: "poppins", width: "121%", height: "27px", paddingLeft: "10%", borderRadius: "7px" }} placeholder='Enter the password' onChange={handlePasswordChange} />
            </label>
            <br />
            <button type="submit" style={{ cursor: "pointer", backgroundColor: "#ff3e1d", borderRadius: "20%", width: "23%", height: "18%", border: "none", color: "#ffffff", display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", marginTop: "3%", fontFamily: "poppins", fontSize: "18px" }}>Login</button>
          </form>
          <h6 style={{ color: "#ffffff", cursor: "pointer", fontFamily: "poppins", marginLeft: "58%" }}>Forgot Password</h6>
        </div>
      </div>
    </div>
  );
}

export default Login;
