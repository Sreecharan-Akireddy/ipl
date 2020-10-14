import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingMatches from './../UpcomingMatches/UpcomingMatches';
import PastMatches from './../PastMatches/PastMatches';
import Revenue from './../Revenue/Revenue';
import './UserProfile.css';

class UserProfile extends Component{
    constructor(props){
        super(props)
        this.state = {
            "name": "Sreecharan Akireddy",
            "panel": "upcomingMatches"
        }
    }
    upcomingMatches(e){
        this.setState({"panel": "upcomingMatches"})
    }
    pastMatches(e){
        this.setState({"panel": "pastMatches"})
    }
    revenue(e){
        this.setState({"panel": "revenue"})
    }
    render(){
        let grid = ""
        if(this.state.panel === "pastMatches"){
            grid = <PastMatches />
        }
        else if(this.state.panel === "revenue"){
            grid = <Revenue />
        }
        else if(this.state.panel === "upcomingMatches"){
            grid = <UpcomingMatches />
        }

        return(
            <body>
            <div className="container">
                {/*<div className="card top">
                    <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">Sreecharan Akireddy</h5>
                        <p className="card-text">Total Payable: 500</p>
                        <p className="card-text">Team Total: 5400</p>
                    </div>
        </div>*/}
                <div className="jumbotron text-center">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <img className="rounded-circle z-depth-2" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" data-holder-rendered="true"></img>
                        </div>
                        <div className="col-md-8 mb-4">
                            <h1>{this.state.name}</h1>
                            <h2>Payable Amount: 500</h2>
                            <h2>Team Total: 5600</h2>
                        </div>
                    </div>
                </div>
                <div className="btn-group btn-block">
                    <Button className="btn-grad" onClick= {() => this.upcomingMatches()}>Upcoming Matches</Button>
                    <Button className="btn-grad" onClick= {() => this.pastMatches()}>Past Matches</Button>
                    <Button className="btn-grad" onClick= {() => this.revenue()}>Revenue</Button>
                </div>
            </div>
            <div className="container btm-margin">
                {
                    grid
                }
            </div>
            </body>
        )
    }

}

export default UserProfile;