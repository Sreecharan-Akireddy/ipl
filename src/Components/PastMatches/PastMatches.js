import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PastMatches.css'

class PastMatches extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div class="row">
            <div class="col-sm-6">
                <div class="card matches">
                <div class="card-body">
                <h4>WON</h4>
                <h5 class="card-title">11th Oct 2020, Saturday</h5>
                <p class="card-text">Abu dhabi</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card" enabled>RR</Button>
                        <Button className="btn-grad card" disabled>KXIP</Button>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card matches">
                <div class="card-body">
                <h4>LOST</h4>
                <h5 class="card-title">10th Oct 2020, Friday</h5>
                <p class="card-text">Abu dhabi</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card">KKR</Button>
                        <Button className="btn-grad card" disabled>RCB</Button>
                    </div>
                </div>
                </div>
            </div>

            <div class="col-sm-6">
                <div class="card matches">
                <div class="card-body">
                <h4>LOST</h4>
                <h5 class="card-title">9th Oct 2020, Thursday</h5>
                <p class="card-text">Dubai</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card" disabled>DC</Button>
                        <Button className="btn-grad card">CSK</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default PastMatches;