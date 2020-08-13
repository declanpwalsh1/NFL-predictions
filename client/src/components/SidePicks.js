import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';


const Choice = (props) => {
    return (
        <div className="choice">
            {props.choice.team} at {props.choice.line}
        </div>
    );
}

const SidePicks = (props) => {
    const [choices, setChoices] = useState([{"team":"Eagles", "line":'-5'}, {"team":"Falcons","line":'+2'}, {"team":"Patriots", "line":'even'}]);

    return (
        <div className='side-picks'>
            {
                choices.map((choice, index) => (<Choice choice={choice} index={index}/>))
            }
            {   choices.length > 0 &&
                <Button disabled={true} variant="outline-primary">Finalize Picks</Button>
            }
            

        </div>
    );
}

export default SidePicks;
