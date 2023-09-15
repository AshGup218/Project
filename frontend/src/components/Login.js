// Login.js
import React, { useState } from 'react';
import './login.css';
import { Link, Route, Routes } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
var baseUrl="https://localhost:7072/api/Back/Login"
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //const correctEmail='priya@gmail.com';
        //const correctPassword='password123';
        const data={

            id:email,

            pass:password

        };

 

        axios.post(baseUrl,data).then(response=>{
            //var check="No"
            //console.log(response)

            if(response.data=="Yes")

            {

                setIsAuthenticated(true);
                navigate('/imp');

            }

 

            else if(response.data=="No") {

                alert("Enter valid credentials");

            }
        }).catch((error)=>console.log(error));

   

        // Handle login logic here (e.g., send data to a server for authentication)

    
        // if(email===correctEmail && password===correctPassword)
        // {
            
        // }
    
        
        
    };

    return (
        <div>
         <div className='container2'>
        <h2>Log-In here!!</h2>
        </div>

            <div class="cotn_principal">

                

                    <div className="login-card">
            <h2>Login</h2>
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
                        <Link to="/signup" className="my">New User Register here!!</Link>
                        {/* <Link to="/imp">  */}
                            <button type="submit">Log In</button>
                        {/* </Link> */}
                
            </form>
            </div>

                </div>
            </div>
        

    );
}

export default Login;
