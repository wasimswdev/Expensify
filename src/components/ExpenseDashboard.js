import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import { Link } from 'react-router-dom';



const ExpenseDashboard = () => (
    <div>
        <label htmlFor="add">Add Expense:</label>
        <button id="add"><Link to="/create" >+</Link></button>
        <ExpenseListFilter />
        <ConnectedExpenseList/>
    </div>
    )

  

export default ExpenseDashboard