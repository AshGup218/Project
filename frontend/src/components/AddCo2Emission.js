import React,{useContext,useState}from 'react';
//import { AppContext } from '../context/AppContext';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';
import {useNavigate} from 'react-router-dom';

const AddCo2Emission = () => {
	const navigate = useNavigate();
    const { dispatch } = useContext(AppContext);

    const [distance, setDistance] = useState('');
	const [mileage, setMileage] = useState('');
	const[type,setType]=useState('');
	
	 const handleTypeChange=(e)=>{
		setType(e.target.value);
	 };
	// const handelChange=(event)=>{
	// 	this.setState({selectOption: event.target.value});
	// }
	
	const emissionFactors={
        Petrol:2.296,
        Diesel:2.653,
        CNG:2.983,
        // Electricity:0.85,
    };
	
	
    const onSubmit = (event) => {
        event.preventDefault();
        const emissionFactor=emissionFactors[type];
        const expense = {
			id: uuidv4(),
			distance : parseInt(distance),
			mileage : parseInt(mileage),
			
			
			emission : parseFloat((distance/mileage)*emissionFactor)


			//distance: parseInt(distance),
        };
		
        dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});
	};
	const handleLogout=()=>{
		
		navigate('/');
	}
	// const handleDeleteAccount=()=>{
	// 	alert("successfully deleted");
	// }
	

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				
			<div className='col sm' >
			
				<label for='type'>Type</label>
				
				<select id="type" name="type"  className='form-control' value={type} onChange={handleTypeChange} >
					<option value="" ></option>
					<option value="Petrol">Petrol(Litres)</option>
					<option value="Diesel">Diesel(Litres)</option>
                    <option value="CNG">CNG(Kg)</option>
					{/* <option value="Other">Other</option> */}
					

				</select>
				
				
				
			</div>
			
			
				<div className='col-sm'>
					<label for='distance'>Distance(Km)</label>
					<input
						required='required'
						type='integer'
						className='form-control'
						id='distance'
                        value={distance}
						onChange={(event) => setDistance(event.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='mileage'>Mileage</label>
					<input
						required='required'
						type='integer'
						className='form-control'
						id='mileage'
                        value={mileage}
						onChange={(event) => setMileage(event.target.value)}
					></input>
				</div>
				

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Calculate
					</button>
					<button type='button' className='btn btn-primary mt-3' onClick={handleLogout}>
						Log-Out
					</button>
					{/* <div>
					< button className='delete-account-button' onClick={handleDeleteAccount}>Delete Account</button>
					</div> */}
				</div>
            </div>
			<p>{}</p>
		</form>
	);
};

export default AddCo2Emission;