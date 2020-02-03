import React, { Component } from 'react';
import {index, destroy} from './api';
import {Link} from 'react-router-dom' ;
class EventIndex extends Component {
    state = { 
        events:[]
    }
componentDidMount(){
    const user = this.props.user;
    index(user)
    .then( (response) => {
        const allevent = response.data.events
        // console.log(allevent)
        this.setState({
            events: allevent
        })
    })
    .catch(err => console.log(err))
}
render() { 
return ( <div>
    {this.state.events.map((event,index)=> (
        // index is a number start from 0 to infinite each loop of events 
        <div key={index}>
            <h5>name: {event.name}</h5>
            <h5>Date: {event.date}</h5>
            <Link to={`/events/${event._id}`}>Show</Link>
            <hr/>
        </div>
    ))}
</div> 
);
}
}
export default EventIndex;