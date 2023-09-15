import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import './App.css';
import './imp.css'
//change import Budget from './components/Budget';

//import Remaining from './components/Remaining';
// import './ExpenseTotal';
import ExpenseTotal from './ExpenseTotal';
// import './ExpenseList';
 import ExpenseList from './ExpenseList';
//import AddExpenseForm from './components/AddCo2Emission';
// import './AddCo2Emission';
import AddCo2Emission from './AddCo2Emission';
import { AppProvider } from '../context/AppContext';
// import { AppProvider } from './context/AppContext';
import { Navbar, Nav } from 'react-bootstrap';
// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './Signup';
// import Signup from './components/Signup';
import './Login';
// import Login from './components/Login';
import './Home';
// import Home from './components/Home';
// import Navigation from './components/Navigation'; // Import the Navigation component


const Imp = () => {
	return (
		
		<AppProvider>
		
			<div className='container2'>
           <Navbar  className='centre-navbar'> {/* Define Navbar component */}
		   
             <Navbar.Brand  href='/'>Goal Net Zero</Navbar.Brand>
             <Navbar.Toggle aria-controls='basic-navbar-nav' />
             <Navbar.Collapse id='basic-navbar-nav'>
               <Nav className='mr-auto'>
                 <Nav.Link href='/login'>Log-In</Nav.Link>
                 <Nav.Link href='/signup'>Register</Nav.Link>
               </Nav>
			   
             </Navbar.Collapse>
           </Navbar>

           
         </div>
		 
      <div className='my2' >   
		 <div className='container'>
		 
				<h1 className='mt-3'>Goal Net Zero</h1>
				<div className='row mt-3'>
					
					
					<div className='col-sm'>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='mt-3'>CO2 emitted</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<ExpenseList />
					</div>
				</div>
				<h3 className='mt-3'>Add C02 Emission</h3>
				<div className='row mt-3'>
					<div className='col-sm'>
						<AddCo2Emission />
					</div>
				</div>
			</div>
      </div>
		</AppProvider>
	);
};

export default Imp;