import React, {Component} from 'react';
import {show,destroy,registerUser, destroyUserRegister } from '../api'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./style.css"
import { Button } from 'react-bootstrap';
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
        .then(()=> alert("deleted"))
        .then(()=>{
            //redirect the url 
            this.props.history.push(`/events`)
        })
        .catch(err => console.log(err))
}

register = () => {
    const user = this.props.user
    const eventId = this.props.match.params.id; // get the :id in url
    registerUser(user,eventId)
    .then(() => {
        console.log("You registered to this event!!")
        const copyState = {...this.state}
        // const updateRegisters = copyState.event.registers
        copyState.event.registers.push(user._id)
        console.log(copyState.event.registers)
        this.setState(copyState)
    })
    .catch((err) => console.log(err))
}

removeRegister = () => {
    console.log('removeeeeeee')
    const user = this.props.user
    const eventId = this.props.match.params.id;
    destroyUserRegister(user, eventId)
    .then(() =>{
        console.log("you are no longer registered on this event!!")
        const copyState = {...this.state}
        const updateRegisters = copyState.event.registers.filter((registerId) => registerId !== user._id)
        copyState.event.registers = updateRegisters
        console.log('removeeeeeee')
        console.log(copyState.event.registers)
        this.setState(copyState)
    })
    .catch(error=> {
        console.log(error)
    })
    
}
    render() { 
        return (
         <div className="row show">
            {this.state.event ? 
            <div className="col-md-6">
                <div className="card border-secondary flex-md-row mb-4 shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                <strong className="d-inline-block mb-2 text-dark"> Name: {this.state.event.name} </strong>
                <h6 className="mb-0">
               <a className="text-dark" href="#">Place: {this.state.event.place} </a>
               </h6>
               <div className="mb-1 text-muted small"> {this.state.event.date} </div>
                <br/>
                <p className="card-text mb-auto"> event details. event details. event details. event details. event details. event details.event details. event details. event details. </p>
               <img style={{width:"100%"}} src={this.state.event.img}/>
               
                {this.props.user ? 
                <div>
                    {this.state.event.registers  ? 
                        <div>
                            {this.state.event.registers.includes(this.props.user._id)? 
                            <Button style={{marginTop:"10px"}} variant="secondary" size="lg" block onClick={this.removeRegister}>
                            You are registered 
                            </Button>
                                    : 
                                <Button style={{marginTop:"10px"}} variant="success" size="lg" block onClick={this.register}>
                                Register on this event
                                </Button>
                            }
                        </div>
                        :
                        ""
                        }
                    
                    
                    {this.props.user.admin ? 
                     <div> 
                     <Link className="btn btn-outline-secondary btn-sm" to={`/events/${this.state.event._id}/edit`}>Edit</Link> 
                     <Button variant="btn btn-outline-secondary btn-sm" onClick={() => this.destroy(this.state.event._id)}>Delete</Button>
                     
                 </div>
                    :
                    ""}
                </div>
                :
                ""}
               
            </div>
            </div>
            </div>
            :
            ""}
            </div>
          );
    }
}
export default withRouter(EventShow);