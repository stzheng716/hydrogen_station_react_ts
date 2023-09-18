import React from 'react';
import legend from "../assets/images/marker_legend.png";

function Legend() {
    return (
        <div className="absolute bottom-8 left-2 bg-transparent rounded-md">
            <img src={legend} alt="map legend" className="max-w-[30%] rounded"/>
        </div>
    )
}

export default Legend