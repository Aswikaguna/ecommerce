import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.scss';
//import loginImage from './login.jpg'; // Import your login image

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields'); 
      return;
    }

    try {
      const response = await fetch('/coachlog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
   
        alert('Login Successfull');
        navigate('/');
      } else {
        alert('Invalid username or password'); 
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.'); 
    }
  };
  const backgroundImageUrl = 'https://img.freepik.com/free-vector/botanical-themed-design-space_53876-89210.jpg?w=1060&t=st=1697041206~exp=1697041806~hmac=8e6b84513540e643b1d2b818adfc2bd5687e6ca855f3d51c720228bb72505b2e'; // Replace with the actual image URL

  return (
    <div className='log'  style={{
      backgroundImage: `url(${backgroundImageUrl})`, // Set the online image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
    <div className="login-container">
      <div className="login-content">
        <div className="login-form">
          <h2>Sign In</h2>
          <p>“Relax we've got this!”</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              
            <input
                  type="text"
                  id="input1"
                  name="input1"
                
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
            <input
                  type="password"
                  id="input2"
                  name="input2"
               
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Login</button><br/><br/>
            Don't have a account? <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>Create a new account</Link>
          </form>
        </div>
        {/* <div className="login-image">
          <img src={loginImage} alt="Login" />
         </div> */}
        
      </div>
    </div>
    </div>
  );
}

export default LoginPage;