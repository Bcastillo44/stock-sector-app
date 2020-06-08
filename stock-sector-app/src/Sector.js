import React from 'react';


function Sector({title}, {sectors}){
    console.log(sectors)
    return (
    <li>
        {title} - {sectors}
    </li>

    );
}


export default Sector;