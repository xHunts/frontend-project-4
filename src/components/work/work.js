import React, { Component } from 'react';
import './work.css'
class Work extends Component {
  
    
    render() { 
        return (
            
<div class="container">
      <div class="timeline">
      <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Event Locaticn</h3>
            <p>each event has it's own location, and each time it will be in different location!</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
            <img src="img/img13.png" class="img-fluid" alt="img"/>
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          </div>
          </div>

          <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Kind of hunts</h3>
            <p>Events will have different hunts related to the place and purpose</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
            <img src="img/img13.png" class="img-fluid" alt="img"/>
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>

        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Join Us</h3>
            <p>YOU can Join as individuals or as group!!</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
            <img src="img/img13.png" class="img-fluid" alt="img"/>
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>


        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Fees</h3>
            <p> 50SR for each person</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
            <img src="img/img13.png" class="img-fluid" alt="img"/>
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>
      </div>
                    <button className="register">Register</button>
                    </div>
          
        );
    }
}
 
export default Work;