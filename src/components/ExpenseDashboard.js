import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpenseTotal from './ExpenseTotal';


const ExpenseDashboard = () => (
    <div>
        <ExpenseTotal />
        <ExpenseListFilter />
        <ConnectedExpenseList/>
    </div>
    )

  

export default ExpenseDashboard