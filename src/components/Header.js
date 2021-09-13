import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
      <div className="content-container"> 
        <div className="header-heading-content">
          <NavLink className="header-heading-content__heading" to="/dashboard" ><h1>Expensify</h1></NavLink>
          <button className="header-heading-content__logout" onClick={startLogout}>Logout</button>
        </div>
      </div>
    </header>
  )
  
  const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
  })

  export default connect(undefined, mapDispatchToProps)(Header)

      // <button onClick={startLogout}>Log out</button>
