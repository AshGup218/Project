import React,{useContext}from 'react';
import { AppContext } from '../context/AppContext';
//import AddCo2Emission from './AddCo2Emission';

const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext);

	const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.emission);
	}, 0);
	
	return (
		<div className='alert alert-primary'>
			<span>Total Emission: {totalExpenses}Kg</span>
		</div>
	);
};

export default ExpenseTotal;