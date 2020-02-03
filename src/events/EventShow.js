import React, {Component} from 'react';
import {show,destroy} from './api'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
class EventShow extends Component {
    state = {  
        event:""
}
componentDidMount(){
    // const user = this.props.user;
    const eventId = this.props.match.params.id; // get the :id in url
    // console.log(user,eventId)
    show(eventId )
    .then((response)=>{
        const showEvent = response.data.event;
        this.setState({
            event:showEvent
        })
    })
    .catch((error)=> console.log(error))
}
destroy = (id) => {
    destroy(this.props.user,id)
        .then(()=> console.timeLog("deleted"))
        .then(()=>{
        const updateEvents = this.state.events.filter(event => event._id !== id)
        this.setState({
            events: updateEvents
        })
        })
        .catch(err => console.log(err))
}
    render() { 
        return (
            <div>
            {this.state.event ? 
            <div>
                <h5>Name: {this.state.event.name}</h5> 
                <h5>Place: {this.state.event.place}</h5>
                <h5>Date: {this.state.event.Date}</h5>
                <br/>
                <img src={this.state.event.img}/>
                {this.props.user ? <Link to={`/events/${this.state.event._id}/edit`}>Edit</Link> :""}
                <hr/>  
            </div>
            :
            ""}
            </div>
          );
    }
}
export default withRouter(EventShow);