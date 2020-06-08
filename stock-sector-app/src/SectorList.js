import React from "react";
import Sector from "./Sector";

function SectorList({ sectors }) {
    console.log(sectors)
    return (
        <ul>
            {sectors.map(sector => {
                return <Sector key={sector.title} {...sector}/>;

            })}
        </ul>
    )
}
export default SectorList;