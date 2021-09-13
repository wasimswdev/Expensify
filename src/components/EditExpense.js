import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
  return (
    <div>
      <div class="page-header">
        <div className="content-container">
          <h1 className="expense-header__head">Edit Expense</h1>
        </div>
      </div>
      <ExpenseForm 
      expense = {props.expense}
      onSubmit = {(expense) => {
        props.dispatch(startEditExpense(props.expense.id,expense))
        props.history.push("/dashboard")
      }} 
      onRemove = {() => {
        props.dispatch(startRemoveExpense(props.expense))
        props.history.push("/dashboard")
      }}/>
    </div>
  )
    
}
    
const mapStateToProps = ( state, props ) => {
  return {
    expense: state.expenses.find(expense => expense.id === props.match.params.id),
  }
}
  
export default connect(mapStateToProps)(EditExpense)