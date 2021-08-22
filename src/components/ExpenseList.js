import React from 'react'
import {connect} from 'react-redux'
import getVisibleExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';


const ExpenseList = ({ expenses }) => (
        <div>
            <h1>Expense List</h1>
            {expenses.map((expense) =>(
                <ExpenseListItem key={expense.id} {...expense} />
            ))}
        </div>
    )




const mapStateToProps = (state) => {     //state is passed as a prop to the component connected. rerun everytime state changes
    // const expenses = JSON.parse(localStorage.getItem('expenses'))
    // const filters = JSON.parse(localStorage.getItem('filters'))
    // console.log(expenses)

    const {expenses ,filters} = state

    return {
        expenses: getVisibleExpenses(expenses, filters)  //filtered and sorted expense is passed
    }
}

//connect is an Higher Order Component(HOC) which connects component to the redux store, 
//connect implicily inherits state from where we can access state and returns specific object from the state
export default connect(mapStateToProps)(ExpenseList)


//or

// const ConnectedExpenseList = connect((state)=>{
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList)    //component name to be passed as argument in this fashion
