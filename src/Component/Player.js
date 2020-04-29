import React from 'react';
import {List, Header, Rating} from 'semantic-ui-react';

export const Player = ({players})=>{
    return (
        <List>
            {players.map(player=>{
                return (
                    <List.Item key={player.name}>
                        <Header>{player.name}</Header>
                        <Rating rating={player.rating} maxRating={5} disabled/>
                    </List.Item>
                );
            })}
        </List>
    );
};