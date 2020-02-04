import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'
import EventIndex from './events/EventIndex'
import EventShow from './events/EventShow'
import EventCreate from './events/EventCreate'
import EventEdit from './events/EventEdit'
import Footer from './components/footer/footer'
import Work from './components/work/work'
import About from './components/About/about'
class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
        
          {/* ----- INDEX ------ */}
          <Route exact  path='/events' render={() => (
            <EventIndex   />
          )} />
          {/* ----- SHOW -----*/} 
          <Route exact user={user} path='/events/:id' render={() => (
           <EventShow user={user}/>
          )} /> 
          
          {/* ----- EDIT -----  */}
          <AuthenticatedRoute exact user={user} path='/events/:id/edit' render={() => (
           <EventEdit user={user}/>
          )} /> 

        {/* ----- CREATE -----*/} 
        <AuthenticatedRoute exact user={user} path='/events/create/event' render={() => (
           <EventCreate user={user}/>
          )} /> 

          <Route exact path='/works' render={() => (
            <Work/>
          )}/>
          
          <Route exact path='/about' render={() => (
            <About/>
          )}/>


          <Footer/>
         
        </main>
      </React.Fragment>
    )
  }
}

export default App
