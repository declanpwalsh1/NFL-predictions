import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        textAlign             : 'center'
    }
}

const GameModal = (props) => (
    <Modal
        isOpen={!!props.isOpen}
        onRequestClose={props.toggleClose}
        contentLabel={`${props.game.home_team} vs. ${props.game.away_team}`}
        style={customStyles}
        ariaHideApp={false}
    >
        <h3>{`${props.game.home_team} vs. ${props.game.away_team}`}</h3>
        <h2>{ `Week: ${props.game.week} || Year: ${props.game.year}` }</h2>
    </Modal>
);

export default GameModal;