import React from 'react';
import  {connect } from 'react-redux';
import numeral from 'numeral';
import { NavLink } from 'react-router-dom';
import  totalExpenses from '../selectors/total';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseTotal = (props) => {
    return (
        <div className="header-info">
            <div className="content-container">
                {!!props.data.total && <p className="header-info__para">Viewing <strong>{`${props.data.total}`}</strong>
                {` ${props.data.total > 1? 'expenses': 'expense'} `}
                totalling <strong>{`₹ ${numeral(props.data.sum).format('0,0.00')}`}</strong></p>}
                <NavLink className="header-info__add" to="/create" activeClassName="is-active">Add Expense</NavLink>
            </div>
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
