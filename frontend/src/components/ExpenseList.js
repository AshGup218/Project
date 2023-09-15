//import { useContext } from 'react';
import React,{useContext} from 'react'
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
	

    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} emission = {expense.emission} distance={expense.distance} mileage={expense.mileage} />
			))}
		</ul>
    )
}

export default ExpenseList