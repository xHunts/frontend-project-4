//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
//DELETE THIS TO AVOID THE THE COCFLICT
//MESHO PART 
import React, { Component } from 'react';
import { create } from './api';
import {withRouter} from 'react-router-dom';
class NewEvent extends Component {
state = { 
eventForm : {
name: "",
place: "",
link:"",
date:""
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
const newForm = Object.assign(this.state.dataForm)
newForm[name] = value;
this.setState({
    eventForm:newForm
  })
}
handleSubmit = event => {
// to prevent the page from loading
event.preventDefault()
//???????????
const newF = this.state.eventForm
const user = this.props.user
create(user , newF)
.then(
res => console.log(res)
)
.catch(
error => console.error(error)
)
}
render() { 
return ( <div>
<form onSubmit={}>

<label>Name:</label>
<input name="name" value={this.state.eventForm.name}
onChange={this.onChangeHandler}/>
<br/>
<label>Place Name:</label>
<input name="name" value={this.state.eventForm.place}/>
<br/>
<label>Place Link</label>
<input name="name" value={this.state.eventForm.link}/>
<br/>
<label>Date:</label>
<input name="name" value ={this.state.eventForm.day}

onChange={this.state.eventForm.date}/>
<input type="Submit"/>

</form>
</div> );
}
}
export default withRouter(NewEvent);