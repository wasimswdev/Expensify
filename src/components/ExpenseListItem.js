import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

//props passed to the component by connect HOC and parent component both can be accessed by object destructuring
function ExpenseListItem({ dispatch, id, description, amount, createdAt }) { 

    const d = new Date(createdAt)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    
    return (
        <div>
            <Link to={`/edit/${id}`}> <h3>{description}</h3></Link>
            <p>amount: {`₹ ${numeral(amount).format('0,0.00')}`}</p>
            <p>created: {`${da}-${mo}-${ye}`}</p>
        </div>
    )
}


export default connect()(ExpenseListItem)
