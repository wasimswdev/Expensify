import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import history from '../components/history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 
const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
          {/*route takes path and component props and other props*/}
          <PublicRoute path="/" component={LoginPage}  exact={true}/> 
          <PrivateRoute path="/dashboard" component={ExpenseDashboard}/> 
          <PrivateRoute path="/edit/:id"  component={EditExpense}/>
          <PrivateRoute path="/create" component={CreateExpense}/>
          {/* the not found route should be defined last, so switch checks the valid paths before 404! */}
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  )

export default AppRouter
    