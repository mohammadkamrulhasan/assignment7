import React from 'react';

const Club = (props) => {
    const club=props.club;
    // const {image,name,salary}=props.team;
    const {image,name,salary}=props.club;

    let total=0;
    for(let i=0; i<club.length;i++){
        const team=club[i];
        total=total+team.salary;

    }
    
    return (
        <div>
             <h3>Player Select:</h3>
            <p>Number of Player:{club.length}</p>
            <p>Player's Name:{name}</p>
            <p>Player Salary:{salary}</p>
            <p>Total Salary:{total}</p>
        </div>
    );
};

export default Club;