import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpcomingMatches.css'

class UpcomingMatches extends Component{
    constructor(props){
        super(props)
        this.state = {"name": "Sreecharan Akireddy"}
    }
    render(){
        return(
        <div className="row">
            <div className="col-sm-6">
                <div className="card matches">
                <div className="card-body">
                <h5 className="card-title">12th Oct 2020, Monday</h5>
                <p className="card-text">Sharjah</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card">SRH</Button>
                        <Button className="btn-grad card">MI</Button>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card matches">
                <div className="card-body">
                <h5 className="card-title">13th Oct 2020, Tuesday</h5>
                <p className="card-text">Abu dhabi</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card">RCB</Button>
                        <Button className="btn-grad card">RR</Button>
                    </div>
                </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="card matches">
                <div className="card-body">
                <h5 className="card-title">14th Oct 2020, Wednesday</h5>
                <p className="card-text">Dubai</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card">KKR</Button>
                        <Button className="btn-grad card">CSK</Button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )
    }

}

export default UpcomingMatches;