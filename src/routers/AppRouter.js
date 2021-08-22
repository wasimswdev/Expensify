import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
        {/*route takes path and component props and other props*/}
        <Route path="/"  exact={true} component={ExpenseDashboard}/> 
        <Route path="/edit/:id"  component={EditExpense}/>
        <Route path="/help" component={HelpPage} />
        <Route path="/create" component={CreateExpense}/>
        {/* the not found route should be defined last, so switch checks the valid paths before 404! */}
        <Route component={NotFoundPage} />
      </Switch>
      </div>
    </BrowserRouter>
  )

export default AppRouter
    