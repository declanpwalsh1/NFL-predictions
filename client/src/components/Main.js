import React, { useState, useEffect } from 'react';
import Games from './Games';
import axios from 'axios';
import Footer from './Footer';
import SidePicks from './SidePicks';
import Grid from '@material-ui/core/Grid';
// import Media from './Media';
import Search from './Search';
import {PicksContext} from '../components/PicksContext'


const Main = () => {
    const [games, setGames] = useState([]);
    const [access] = useState(undefined);
    const [picks, setPick] = useState([]);
    // const [picks, dispatch] = useReducer(reducer, {picks: []});


    useEffect(() => {
        axios.get('http://localhost:5000/games')
            .then((res) => {
                setGames(res.data);
            })
            .catch((err) => {
                console.log(err);
            })

    }, []);

    return (
        <div className="main-background">
            
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={2}>
                        <PicksContext.Provider value={[ picks, setPick ]}>
                            <SidePicks />
                        </PicksContext.Provider>
                    </Grid>
                    <Grid item xs={6}>
                        <PicksContext.Provider value={[ picks, setPick ]}>
                            <Games 
                                withModal={true}
                                gamesList={games} 
                                num={access}
                                images={true}
                            />
                        </PicksContext.Provider>
                    </Grid>
                    <Grid item xs={4}>
                        <div className="search-container">
                            <PicksContext.Provider value={[ picks, setPick ]}>
                                <Search />
                            </PicksContext.Provider>
                        </div>
                    </Grid>
                </Grid>
            <div>
                <Footer />  
            </div>
        </div>
    );


    // return (
    //     <div className="main-background">
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-lg">
    //                     <Games 
    //                         gamesList={games} 
    //                         num={access}
                            
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="col-sm">
    //             <SidePicks />
    //         </div>
    //         <div>
    //             <Footer />  
    //         </div>
    //     </div>
    // )
}

export default Main;






// import React, { Component} from 'react';
// import Games from './Games';
// import axios from 'axios';



// class Main extends Component {
//     state = {
//         modalAccessed: undefined,
//         games: []
//     }

//     componentDidMount() {
//         axios.get('http://localhost:5000/games')
//             .then((res)=> {
//                 this.setState(() => ({games: res.data}));
//                 console.log(this.state.games);
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <Games 
//                     gamesList={this.state.games} 
//                     num={this.state.modalAccessed}
//                     sendGameData={this.recvGameData}
//                 />
//             </div>
//         )
//     }
// }

// export default Main;