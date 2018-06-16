import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
import AddBook from '../components/AddBook'
import EditBook from '../components/EditBook'
import NotFound from '../components/NotFound'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/add" component={AddBook}/>
          <Route path="/book/:id" component={EditBook}/>
          <Route component={NotFound}/>          
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
