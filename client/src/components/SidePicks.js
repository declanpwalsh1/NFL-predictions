import React, {useContext} from 'react';
import Button from 'react-bootstrap/Button';
// import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CancelPresentationRoundedIcon from '@material-ui/icons/CancelPresentationRounded';
import {PicksContext} from '../components/PicksContext';

const Choice = (props) => {
    const [pick,setPick] = useContext(PicksContext);

    return (
        <div className="container">
            {/* container */}
            <div className="row justify-content-md-center">
                
                <div className="col col-lg-8">
                    {/* game pick */}
                    <div className="choice">
                        {props.pick.team}
                        {props.pick.key}
                    </div>
                </div>
                <div className="col col-sm-2">
                    {/*delete button*/}
                    <CancelPresentationRoundedIcon
                        onClick={ () =>
                            setPick(prev=>[...prev.filter(pick=>pick.key !==props.pick.key)])
                        }

                    >Delete</CancelPresentationRoundedIcon>
                </div>
            </div>
        </div>

        
    );
}

const SidePicks = (props) => {
    // const [choices, setChoices] = useState([{"team":"Eagles", "line":'-5'}, {"team":"Falcons","line":'+2'}, {"team":"Patriots", "line":'even'}]);
    // const [choices, setChoices] = useState(props.picks);
    const [picks, setPick] = useContext(PicksContext);

    return (
        <div className='side-picks'>
            <h6>Game Picks</h6>
            {   picks.length > 0 &&
                picks.map((pick, index) => (<Choice pick={pick} key={index}/>))
            }
            {   picks.length > 0 && <div>
                    <Button variant="outline-primary">Finalize Picks</Button>
                    <Button variant="outline-primary" onClick={() => setPick([])}>Clear Picks</Button>
                </div>
            }


        </div>
    );
}

export default SidePicks;
