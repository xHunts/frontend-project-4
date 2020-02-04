import React, {Component} from 'react';
import {show,update} from './api';
import {withRouter} from 'react-router-dom';

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
        //  const user = this.props.user
         const eventId = this.props.match.params.id
         show(eventId)
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
        const newForm = {...this.state.eventForm}
        newForm[name] = value;
        this.setState({
            eventForm:newForm
        })
    }


    handleSubmit = (event) =>{
        event.preventDefault();
        // console.log(this.props)
        const user = this.props.user;
        const eventId = this.props.match.params.id;
        const updateEvent = this.state.eventForm;
        update(user,updateEvent,eventId)
        .then(() => this.props.history.push(`/events/${eventId}`))
        .catch((error) => console.log(error))
    }


    render() { 
        return ( 
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
     );
    }
}
export default withRouter(EventEdit);