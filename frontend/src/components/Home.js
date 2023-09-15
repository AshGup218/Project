// Home.js
import React from 'react';
import './home.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
function Home() {
    return (
        <div>
        <div className='container2'>
        <h2>Welcome to Goal Net Zero!!</h2>
           </div>
        
            <div class="cotn_principal">

                <div class="cont_centrar">

                    <div class="cont_login">
                        
                        <div class="cont_info_log_sign_up">
                            <div class="col_md_login">
                                <div class="cont_ba_opcitiy">

                                    <h2>LOGIN</h2>
                                    <p></p>
                                    <Link to="/login">
                                        <button class="btn_login" >LOGIN</button>
                                    </Link>
                                    
                                </div>
                            </div>
                            <div class="col_md_sign_up">
                                <div class="cont_ba_opcitiy">
                                    <h2>SIGN UP</h2>
                                    <p></p>
                                    <Link to="/signup">
                                        <button class="btn_sign_up" >SIGN UP</button>
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>


                        <div class="cont_back_info">
                            <div class="cont_img_back_grey">
                                <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="" />
                            </div>

                        </div>
                        <div class="cont_forms" >
                            <div class="cont_img_back_">
                                <img src="https://images.unsplash.com/42/U7Fc1sy5SCUDIu4tlJY3_NY_by_PhilippHenzler_philmotion.de.jpg?ixlib=rb-0.3.5&q=50&fm=jpg&crop=entropy&s=7686972873678f32efaf2cd79671673d" alt="" />
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        
    );
}

export default Home;
