import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faAd } from '@fortawesome/free-solid-svg-icons';
import './Team.css';

const Team = (props) => {
    const {image,name,salary}=props.team;
    return (
        <div className="team" >
            <div>
                {/* <img src={props.product.img} alt=""/> */}
                <img src={image} alt=""/>
            </div>
            <div>
            {/* <h4>{props.product.name} </h4> */}
            <h4 className="team-name" >Player's Name:{name} </h4>
            <br/>
            <p>Player's Salary: ${salary} </p>
            <button 
            className="main-button"
            onClick={()=> props.handleAddTeam(props.team)}
            >
                <FontAwesomeIcon icon={faAd} />Select Player</button>

            </div>
            
            
        </div>
    );
};

export default Team;