import React, { Component } from 'react';
import Game from './Game';
import GameModal from './GameModal';
import '../App.css';

class Games extends Component {

    state = {
        isOpen: false,
        gameData: {}

    }
    
    toggleModal = () => {
        this.setState(() => ({ isOpen: !this.state.isOpen}));
    }

    getGame = (game) => {
        this.setState(() => ({ gameData: game, isOpen: true }))
    }

    render() {
        return (
            <div className="Games">
                {this.props.gamesList.map((game1, index) => (
                       
                        <Game
                            withModal={this.props.withModal} 
                            key={index}
                            id={index}
                            game={game1}
                            images={this.props.images}
                            num={this.props.num}
                            withPicks={true}
                        />
                    ))
                }   
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
