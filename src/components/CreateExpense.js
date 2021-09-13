import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
 

const CreateExpense = (props) => (
  <div>
    <div class="page-header">
      <div className="content-container">
        <h1 className="page-header__head">Add Expense</h1>
      </div>
    </div>
    <ExpenseForm 
    onSubmit = {(expense) => {
      props.dispatch(startAddExpense(expense))
      props.history.push("/dashboard")
    }} />
  </div>
  )

  
export default connect()(CreateExpense)