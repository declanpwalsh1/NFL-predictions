import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Games from './Games';
import nflTeams from '../nfl-teams.json';

const Search = () => {
    const [homeTeam, setHomeTeam] = useState({home_team:""});
    const [awayTeam, setAwayTeam] = useState({away_team:""});
    // const [values, setValues] = useState({home_team:"", away_team:""})
    const [games, setGames] = useState([]);
    // const [toggleStats, setToggle] = useState(false);

    //jsx element for dropdown menu in search
    let teamsListJsx = nflTeams.length > 0 && 
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

    useEffect(() => {
        console.log("This is in our games state\n")
        console.log(games)
    }, [games]);

    const submitForm = (e) => {
        e.preventDefault();

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
            <form onSubmit={submitForm}>
                <label>Home Team:</label>
                <select onChange={(e) => setHomeTeam({home_team: e.target.value})}>
                    {teamsListJsx}
                </select>
                <label>Away Team:</label>
                <select onChange={(e) => setAwayTeam({away_team: e.target.value})}>
                    {teamsListJsx}
                </select>
                <input type='submit' value='submit' />
            </form>
            <button onClick={() => setGames([])}>Clear Games</button>
            {
                games.length > 0 && 
                <Games
                    gamesList={games}
                    images={false}

                />
            }


        </div>
    );
}

export default Search;