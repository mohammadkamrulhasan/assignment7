import React, { useState } from 'react';
import playerData from '../../fakeData/fakeData.json';
import Club from '../Club/Club';
import Team from '../Team/Team';
import './Player.css';

const Player = () => {
    const first10=playerData.slice(0,10);
    const [teams, setTeams]=useState(first10);
    const [club, setClub]=useState([]);

    const handleAddTeam=(team)=>{
        // console.log('Product Added',product);
        const newClub=[...club,team];
        setClub(newClub);
}
    return (
        <div className="player-container">
            <div className="team-container">
            {/* <ul>
                {
                    players.map(player => <li>{player.name} </li> )
                }
            </ul> */}
            {
                    teams.map(team => <Team 
                           handleAddTeam={handleAddTeam} 
                        team={team}
                        ></Team>)
                }
            </div>
            <div className="club-container">
                    {/* <h3>This is cart</h3>
                    <h3>Order Summary: {cart.length} </h3> */}
                    <Club club={club}></Club> 
            </div>
            
        </div>
    );
};

export default Player;