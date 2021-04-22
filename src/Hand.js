import React, { Component } from 'react';
import Card from './Card';
import './Hand.css';

class Hand extends Component {
    handlePlay() {
    location.reload();
}
    render() { 
        let title;
        if(this.props.winner){
            title = <h1 className="game-winner">Winning Hand</h1>;
        } else{
            title = <h1 className="game-loser">Losing Hand</h1>
        }
        return (
            <div className="Hand">
                <button className="button" onClick={() => {this.handlePlay()}}>Play</button>
                {title}
                
                <h4>Total Value: {this.props.total}</h4>
                <div className="Hand-cards">
                    {this.props.cards.map((p) => (
                        <Card id={p.id} value={p.value} img={p.img} />
                    ))}
                </div>

            </div>
        );
    }
}
 
export default Hand;