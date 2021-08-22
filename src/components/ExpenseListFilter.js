import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'




//1.value attribute in input text type defines the initial value of the input
//2.e.target.value is a separate built-in method and it is not related to the value attribute of the input element
//3.if any input changes then function "handleFilterText" runs setting filter text to the input given by user
//4.this updates the state in the redux store
const ExpenseListFilter = (props) => {
    const handleFilterText = (e) => {
        props.dispatch(setTextFilter(e.target.value))
    }

    const handleSortBy = (e) => {
        if (e.target.value === 'date'){
            props.dispatch(sortByDate())
        }else if(e.target.value === 'amount'){
            props.dispatch(sortByAmount())
        }
    }

    const handleStartDate =(e) => {
        props.dispatch(setStartDate(e.target.value))
    }

    const handleEndDate = (e) => {
        props.dispatch(setEndDate(e.target.value))
    }

    useEffect(() =>{
        localStorage.setItem('filters', JSON.stringify(props.filters))
    },[props.filters])
    
    return (
        <div>
            <input type="text" value={props.filters.text} placeholder="search for expenses" onChange={handleFilterText}/> 
            <select value= {props.filters.sortBy} onChange={handleSortBy}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <input type="date" onChange={handleStartDate} required pattern="\d{4}-\d{2}-\d{2}" /> {/* */}
            <input type="date" onChange={handleEndDate} required pattern="\d{4}-\d{2}-\d{2}"/>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilter)