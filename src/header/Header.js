import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss';

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
   {/* new */}
  
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

const alwaysOptions = (
  <React.Fragment>
    <Link to="/">Home</Link>
    <Link to="/events"> EVENTS</Link>
    <Link to ="/works">How it works</Link>
    <Link to ='/about'>About</Link>
  </React.Fragment>
)
const checkAdminOrNot = (user) => {
  console.log(user)
  // if(user.admin){
  //   return <Link to="/events/create"> create </Link> 
  // }else{
  //   return ""
  // }
}
const Header = ({ user }) => (
  <header className="main-header">
    <h1>Uber, But For Taxis</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
      {user ? 
      <div>
        {user.admin ? <Link to="/events/create"> create </Link> :""}
      </div>
      : ""}
      
    </nav>
  </header>
)

export default Header;