import React, {useState} from 'react';
import '../App.css';
import nflteams from '../nfl-teams.json';
const images = require.context('../images', true);


const Image = ({url}) => {
    const Img = require(`${url}`).ReactComponent;
    return <Img/>
}

const MaxTable = (props) => {
    let home_short_name = nflteams.find(team => team.full_name === props.game.home_team).name;
    let away_short_name = nflteams.find(team => team.full_name === props.game.away_team).name;

    return (
        <table className="table-bordered table">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">{home_short_name}</th>
                    <th scope="col">{away_short_name}</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Pred. Score</th>
                    <td>{props.game.homescore_pred.toFixed(2)}</td>
                    <td>{props.game.awayscore_pred.toFixed(2)}</td>
                    <th scope="row">Pred. Score</th>
                </tr>
                <tr>
                    <th scope="row">PPG</th>
                    <td>{props.game.home_ppg}</td>
                    <td>{props.game.away_ppg}</td>
                    <th scope="row">PPG</th>
                </tr>
                <tr>
                    <th scope="row">PPG Against</th>
                    <td>{props.game.homeA_ppg}</td>
                    <td>{props.game.awayA_ppg}</td>
                    <th scope="row">PPG Against</th>
                </tr>
                <tr>
                    <th scope="row">YPG</th>
                    <td>{props.game.home_ypg}</td>
                    <td>{props.game.away_ypg}</td>
                    <th scope="row">YPG</th>
                </tr>
                <tr>
                    <th scope="row">YPG Against</th>
                    <td>{props.game.homeA_ypg}</td>
                    <td>{props.game.awayA_ypg}</td>
                    <th scope="row">YPG Against</th>
                </tr>
                <tr>
                    <th scope="row">Rush Yards</th>
                    <td>{props.game.home_rushyds}</td>
                    <td>{props.game.away_rushyds}</td>
                    <th scope="row">Rush Yards</th>
                </tr>
                <tr>
                    <th scope="row">Rush Yards Against</th>
                    <td>{props.game.homeA_rushyds}</td>
                    <td>{props.game.awayA_rushyds}</td>
                    <th scope="row">Rush Yards Against</th>
                </tr>
                <tr>
                    <th scope="row">Pass Yards</th>
                    <td>{props.game.home_passyds}</td>
                    <td>{props.game.away_passyds}</td>
                    <th scope="row">Pass Yards</th>
                </tr>
                
            </tbody>
        </table>
    );

}

const MinTable = (props) => {
    let home_short_name = nflteams.find(team => team.full_name === props.game.home_team).name;
    let away_short_name = nflteams.find(team => team.full_name === props.game.away_team).name;
    
    return (
        <table className="table table-bordered min-table">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">{home_short_name}</th>
                    <th scope="col">{away_short_name}</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Pred. Score</th>
                    <td>{props.game.homescore_pred.toFixed(2)}</td>
                    <td>{props.game.awayscore_pred.toFixed(2)}</td>
                    <th scope="row">Pred. Score</th>
                </tr>
                <tr>
                    <th scope="row">PPG</th>
                    <td>{props.game.home_ppg}</td>
                    <td>{props.game.away_ppg}</td>
                    <th scope="row">PPG</th>
                </tr>
            </tbody>
        </table>
    );
}


export default function Game(props) {
    const [toggle, setToggle] = useState(true);

    let home_jpg = nflteams.find(team => team.full_name === props.game.home_team).pic;
    let away_jpg = nflteams.find(team => team.full_name === props.game.away_team).pic;
    // let away_jpg = './falcons.gif';
    
    return (
        <div>
            <div className="SingleGame" onClick={() => setToggle(!toggle)}>
                <h3>{props.game.home_team} vs. {props.game.away_team}</h3>
                <h6>{props.game.date}</h6>
                <div className="container">
                    <div className="row">
                        { props.images &&
                            <div className="col-sm">
                                <img className="HomeImage" src={images(home_jpg)}/>
                            </div>
                        }
                        
                        <div className="col-lg">
                        { toggle &&
                            <MinTable game={props.game}/>
                        }
                        {
                            !toggle &&
                            <MaxTable game={props.game} />
                        }
                        </div>
                        { props.images &&
                            <div className="col-sm">
                                <img className="AwayImage" src={images(away_jpg)}/>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

// onClick={() => (props.sendGameData(props.game))