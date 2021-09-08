import React from 'react'
import  {connect } from 'react-redux'
import  totalExpenses from '../selectors/total'
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseTotal = (props) => {
    return (
        <div>
            {!!props.data.total && <h3>{`Viewing ${props.data.total}
            ${props.data.total > 1? 'expenses': 'expense'} 
            totaling ₹ ${numeral(props.data.sum).format('0,0.00')}`}</h3>}
        </div>
    )
}

const mapStateToProps = (state) => {
    const {expenses, filters } = state
    return {
        data : totalExpenses(getVisibleExpenses(expenses, filters))
    }
}

export default connect(mapStateToProps)(ExpenseTotal)
