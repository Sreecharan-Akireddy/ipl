import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PastMatches.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheck, faSadCry, faSmile, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class PastMatches extends Component{
    constructor(props){
        super(props)
        this.state = {"matches":
        {"49": {"team1": "CSK", "team2": "RR", "venue": "Sharjah", "day": "11th Oct 2020, Sunday", "result": "WON"},
        "48": {"team1": "RCB", "team2": "SRH", "venue": "Abu dhabi", "day": "10th Oct 2020, Saturday", "result": "LOST"},
        "47": {"team1": "KKR", "team2": "CSK", "venue": "Dubai", "day": "9th Oct 2020, Friday", "result": "LOST"},
        "46": {"team1": "KXIP", "team2": "DC", "venue": "Abu dhabi", "day": "8th Oct 2020, Thursday", "result": "WON"},
        "45": {"team1": "RR", "team2": "KKR", "venue": "Dubai", "day": "7th Oct 2020, Wednesday", "result": "LOST"},
        "44": {"team1": "CSK", "team2": "KXIP", "venue": "Abu dhabi", "day": "6th Oct 2020, Tuesday", "result": "WON"},
        "43": {"team1": "RR", "team2": "RCB", "venue": "Sharjah", "day": "5th Oct 2020, Monday", "result": "WON"},
            }
        }
    }
    render(){
        let pastMatchesCards = Object.entries(this.state.matches).map(([matchid, value]) => {
            return <div className="col-sm-6" key= {matchid}>
                <div className="card matches">
                <div className="card-body">
                <h4>{value.result}</h4>
                <h5 className="card-title">{value.day}</h5>
                <p className="card-text">{value.venue}</p>
                <div className="btn-group btn-block">
                        <Button className="btn-grad card">
                                <div className="row">
                                    <div className="col">
                                        {value.team1}
                                    </div>
                                    <div className="col">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </div>
                                </div>
                        </Button>
                        <Button className="btn-grad card">
                               <div className="row">
                                    <div className="col">
                                        {value.team2}
                                    </div>
                                </div>
                        </Button>
                    </div>
                </div>
                </div>
            </div>
        }
        )
        return(
        <div class="row">
            {pastMatchesCards}
        </div>
        )
    }

}

export default PastMatches;