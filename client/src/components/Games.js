import React, { Component } from 'react';
import Game from './Game';
import GameModal from './GameModal';
import '../App.css';

class Games extends Component {

    state = {
        isOpen: undefined,
        gameData: {}

    }
    
    toggleModal = () => {
        this.setState(() => ({ isOpen: undefined}));
    }

    getGame = (game) => {
        this.setState(() => ({ gameData: game, isOpen: true }))
    }

    setPicks = (data) => {
        console.log('picked')
    }

    render() {
        return (
            <div className="Games">
                {this.props.gamesList.map((game1, index) => (
                    <Game 
                        key={index.toString()}
                        game={game1}
                        images={true}
                        num={this.props.num}
                        sendGameData={this.getGame}
                        withPicks={true}
                    />
                ))}

                <GameModal
                    isOpen={this.state.isOpen}
                    toggleClose={this.toggleModal}
                    getGameData={this.state.getGame}
                    game={this.state.gameData}
                    className="Modals"
                />
            </div>
        )
    }
}

export default Games;
