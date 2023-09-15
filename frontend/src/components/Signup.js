// Login.js
import React, { useState } from 'react';
import './login.css';
import { Link, Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
var baseUrl="https://localhost:7072/api/Back"
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data={id:email,pass:password};

        axios.post(baseUrl,data).then(response=>{

            //console.log(response);
            
            if(email.trim()==='' && password.trim()==='')
        {
            alert("Please enter the credentials");
            return;
        }
        else{
            // alert("Successfully registered now login");
            navigate('/login');
        }

        

        }).catch((error) => { alert(error)});

        // Handle login logic here (e.g., send data to a server for authentication)

    
        // Handle login logic here (e.g., send data to a server for authentication)
        
    };

    return (
        <div>
        <div className='container2'>
        <h2>Register here!!</h2>
        </div>
            <div class="cotn_principal">



                <div className="login-card">
                    <h2>Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <Link to="/login" className="my">Already a user Login here!!</Link>
                        
                            <button type="submit">Sign up</button>  
                        

                    </form>
                </div>

            </div>
        </div>


    );
}

export default Login;
