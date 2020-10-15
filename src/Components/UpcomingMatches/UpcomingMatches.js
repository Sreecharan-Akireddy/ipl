import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UpcomingMatches.css'

class UpcomingMatches extends Component{
    constructor(props){
        super(props)
        this.state = {"matches":
        {"51": {"team1": "SRH", "team2": "MI", "venue": "Sharjah", "day": "12th Oct 2020, Monday", "teamSelected" :""},
        "52": {"team1": "RCB", "team2": "RR", "venue": "Abu dhabi", "day": "13th Oct 2020, Tuesday", "teamSelected" :""},
        "53": {"team1": "KKR", "team2": "CSK", "venue": "Dubai", "day": "14th Oct 2020, Wednesday", "teamSelected" :""},
        "54": {"team1": "KXIP", "team2": "DC", "venue": "Abu dhabi", "day": "15th Oct 2020, Thursday", "teamSelected" :""},
        "55": {"team1": "RR", "team2": "KKR", "venue": "Dubai", "day": "16th Oct 2020, Friday", "teamSelected" :""},
        "56": {"team1": "CSK", "team2": "KXIP", "venue": "Abu dhabi", "day": "17th Oct 2020, Saturday", "teamSelected" :""},
        "57": {"team1": "SRH", "team2": "RCB", "venue": "Dubai", "day": "18th Oct 2020, Sunday", "teamSelected" :""},
        "58": {"team1": "MI", "team2": "DC", "venue": "Abu dhabi", "day": "19th Oct 2020, Monday", "teamSelected" :""}
            }
        }
    }

    selectTeam(match, team){
        const newMatches = {...this.state.matches};
        newMatches[match].teamSelected = team
        this.setState({matches: newMatches})
    }
    render(){
        let upcomingMatchesCards = Object.entries(this.state.matches).map(([matchid, value]) => {
            return <div className="col-sm-6" key= {matchid}>
                <div className="card matches">
                <div className="card-body">
                <h5 className="card-title">{value.day}</h5>
                <p className="card-text">{value.venue}</p>
                <div className="btn-group btn-block">
                        <Button className="btn-match card" onClick={() =>this.selectTeam(matchid, value.team1)}>
                            {(value.team1 === value.teamSelected) ?  value.team1 + " ✓" : value.team1}
                            </Button>
                        <Button className="btn-match card" onClick={() =>this.selectTeam(matchid, value.team2)}>
                            {(value.team2 === value.teamSelected) ?  value.team2 + " ✓" : value.team2}
                            </Button>
                    </div>
                </div>
                </div>
            </div>
        }
        )
        return(
        <div className="row">
            {upcomingMatchesCards}
        </div>
        )
    }

}

export default UpcomingMatches;