import React from "react";

import Panels from "../utils/Panels";
import TextBlock from "../utils/TextBlock";
import Pill from "../utils/Pill";

const panelData = require("../../data/panelData");

const textData = require("../../data/textData");

export default function SpeciesProfile() {
    return (
        <div className="content">
            <h2>Silver Birch</h2>
            <h3>Betula pendula</h3>
            <Pill data={textData.pillData} />
            <div className="content-grid">
                <Panels panelData={panelData} />
                <TextBlock textData={textData} />
            </div>
        </div>
    );
}
