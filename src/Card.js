import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() { 

        return (
			<div className="Card">
				<div className="Card-image">
					<img src={this.props.img} />
				
				</div>
				<div className="Pokecard-data">value: {this.props.value}</div>
			</div>
		);
    }
}
 
export default Card;