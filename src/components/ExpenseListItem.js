import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

//props passed to the component by connect HOC and parent component both can be accessed by object destructuring
function ExpenseListItem({ dispatch, id, description, amount, createdAt }) { 

    const d = new Date(createdAt)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    return (
        <div className="list-body">
        <Link className="list-item" to={`/edit/${id}`}>
            <div className="list-expense-container">
                 <h3>{description}</h3>
                <p className="list-item__created">{`${mo} ${da}, ${ye}`}</p>
            </div>
            <h3>{`₹ ${numeral(amount).format('0,0.00')}`}</h3>
        </Link>
        </div>
    )
}


export default connect()(ExpenseListItem)
//<Link className="list__description" to={`/edit/${id}`}>