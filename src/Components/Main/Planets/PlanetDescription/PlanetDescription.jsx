import React from "react";

export default function PlanetDescription({ data }) {
    return (
        <div className="container">
            <div className="container-top">{data.planet}</div>
            <div className="container-bottom">{data.planetDesc}</div>
        </div>
    );
}
