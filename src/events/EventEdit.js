import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';
import { constants } from 'fs-extra';
class EventEdit extends Component {
    state = { 
        eventForm:{
        name:"",
		place:"",
		link:"",
		date:"",
		img:""
        }
     }
     componentDidMount(){
         const user = this.props.user
         const userId = this.props.user.prams.id
         show(user,userId)
         .then((response)=>{
             const event = response.data.event
             this.setState({
                eventForm: event
             })
         })
         .catch(err => console.log(err))
     }
     handleChange = (event)=> {
        const name = event.target.name;
        const value = event.target.value;
        const newForm = Object.assign(this.state.eventForm)
        newForm[name] = value;
        this.setState({
            eventForm:newForm
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log(this.props)
        const user = this.props.user;
        const userId = this.props.match.params.id;
        const updateEvent = this.state.eventForm;
        update(user,updateEvent,userId)
        .then(() => this.props.history.push(`/events/${userId}`))
        .catch((error) => console.log(error))
    }
    render() { 
        return ( 
        <form onSubmit={this.handleSubmit}>
            <label>name</label>
            <input onChange={this.handleChange} type="text" name="name" value={this.state.eventForm.name}/>
            <label>place</label>
            <input  onChange={this.handleChange} type="text" name="place" value={this.state.eventForm.place}/>
            <label>link</label>
            <input  onChange={this.handleChange} type="text" name="link" value={this.state.eventForm.link}/>
            <label>date</label>
            <input  onChange={this.handleChange} type="text" name="date" value={this.state.eventForm.date}/>
            <label>image</label>
            <input  onChange={this.handleChange} type="text" name="img" value={this.state.eventForm.img}/>
            <button type="submit">Update</button>
    </form>
     );
    }
}
export default withRouter(EventEdit);