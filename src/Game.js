import React, { Component } from 'react';
import Hand from './Hand';

class Game extends Component {
    static defaultProps = {
   cards : [
        { id: 4, value: 1, img:'https://upload.wikimedia.org/wikipedia/commons/3/35/Poker-sm-211-As.png' },
        { id: 7, value: 3, img:'https://upload.wikimedia.org/wikipedia/commons/d/d4/Poker-sm-23C-3d.png' },
        { id: 11, value: 5, img:'https://upload.wikimedia.org/wikipedia/commons/4/48/Poker-sm-24A-5c.png' },
        { id: 25, value: 9, img:'https://upload.wikimedia.org/wikipedia/commons/6/64/Poker-sm-246-9c.png' },
        { id: 39, value: 10, img:'https://upload.wikimedia.org/wikipedia/commons/f/fe/Poker-sm-225-Th.png' },
        { id: 94, value: 11, img:'https://upload.wikimedia.org/wikipedia/commons/2/2f/Poker-sm-244-Jc.png' },
        { id: 133, value: 12, img:'https://upload.wikimedia.org/wikipedia/commons/a/a5/Poker-sm-213-Qs.png' },
        { id: 253, value: 13, img:'https://upload.wikimedia.org/wikipedia/commons/d/d0/Poker-sm-232-Kd.png' },
    ]
};


    render() { 
        
        let user1 = [];
        let user2 = [...this.props.cards];
       
        while (user1.length < user2.length) {
            let randomid = Math.floor(Math.random() * user2.length);
            let randCard = user2.splice(randomid ,1)[0];

            user1.push(randCard);
        }


        let total1 = user1.reduce((value , card) => value + card.value, 0);
        let total2 = user2.reduce((value , card) => value + card.value, 0);
        console.log(total1)
        console.log(total2)
        return (
            <div>
                <Hand cards={user1} total={total1} winner={total1 > total2} />
                <Hand cards={user2} total={total2} winner={total2 > total1} />
            </div>
            
            
          );
    }
}
 
export default Game;