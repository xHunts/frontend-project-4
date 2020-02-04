
import React, { Component } from 'react';
import { create } from './api';
import {withRouter} from 'react-router-dom';
class NewEvent extends Component {
state = { 
  eventForm : {
    name: "",
    place: "",
    link:"",
    date:"",
    img:""
  }
}
handleChange = event => {
  // which input was targeted by the user
  const name = event.target.name
  // then the value of the target
  const value = event.target.value
  //after that i put the value in the targeted input by doing the following
  // in this case i will use set state because i am entring and setting new value
  // for the state.....is the copied state i am using and i want it to appear for me
  // as an object so in put it in {} 
  const newForm = {...this.state.eventForm}
  newForm[name] = value;
  this.setState({
      eventForm:newForm
    })
}

handleSubmit = event => {
// to prevent the page from loading
event.preventDefault()
// get the new event from state 
const newEvent = this.state.eventForm
const user = this.props.user
  create(user , newEvent)
  .then(res => {
    this.props.history.push(`/events`)
  })
  .catch(
    error => console.error(error)
  )
}

render() { 
return ( 
    <div>

        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input name="name" value={this.state.eventForm.name} onChange={this.handleChange}/>
            
            <label>Place Name:</label>
            <input name="place" value={this.state.eventForm.place} onChange={this.handleChange}/>
            
            <label>Place Link</label>
            <input name="link" value={this.state.eventForm.link} onChange={this.handleChange}/>
            
            <label>Date:</label>
            <input name="date" type="date"  value={this.state.eventForm.date} onChange={this.handleChange}/>

            <label>img:</label>
            <input name="img" value={this.state.eventForm.img} onChange={this.handleChange}/>
           
            <input type="submit"/>
        </form>
        
    </div> 
);
}
}
export default withRouter(NewEvent);