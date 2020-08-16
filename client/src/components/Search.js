import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Games from './Games';
import nflTeams from '../nfl-teams.json';
import homeTeams from '../home-team.json'



const Search = () => {
    const [homeTeam, setHomeTeam] = useState({home_team:""});
    const [awayTeam, setAwayTeam] = useState({away_team:""});
    const [games, setGames] = useState([]);

    //jsx element for awayteam drop down option menu
    let awayListJsx = nflTeams.length > 0 && 
        nflTeams.map((team, index) => {
            return (
                <option 
                    key={index} 
                    value={team.full_name}
                >
                {team.full_name}
                </option>
            );
        });

    //jsx element for hometeam drop down option menu
    let homeListJsx = homeTeams.length > 0 &&
        homeTeams.map((team,index) => {
            return (
                <option 
                    key={index} 
                    value={team.full_name}
                >
                {team.full_name}
                </option>
            );
        });

    //post request for searched games
    const submitForm = (e) => {
        e.preventDefault();

        // setAccess(false);
        //posting data
        let query = {
            home_team: homeTeam.home_team,
            away_team: awayTeam.away_team
        }

        axios.post('http://localhost:5000/games', query)
            .then((res)=> {
                const newGames = res.data;
                setGames(newGames);
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        

    }

    return (
        <div className="search">
            {
                !games.length > 0 &&
                <form onSubmit={submitForm}>
                    <select onChange={(e) => setHomeTeam({home_team: e.target.value})}>
                        {homeListJsx}
                    </select>
                    <select onChange={(e) => setAwayTeam({away_team: e.target.value})}>
                        {awayListJsx}
                    </select>
                    <br />
                    <input type='submit' value='submit' />
                </form>
            }
            {
                games.length > 0 &&
                <button 
                    onClick={() => setGames([])}
                >Clear Games</button>
            }
            
            {
                games.length > 0 && 
                <Games
                    withModal={false}
                    gamesList={games}
                    images={false}

                />
            }


        </div>
    );
}

export default Search;