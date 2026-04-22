import React from "react";

//import ForceGraph from "../ForceGraph/ForceGraph";
import ChordGraph from "../ChordGraph/chord_graph";
import InfoField from "../info_field/InfoField";
import AboutProject from "./AboutProject/AboutProject";

import "./BrowseField.css"

const BrowseField = () => {
  return (
    <div className="container1">
      <AboutProject />
      <div className="left1">
        <ChordGraph />
      </div>
      <div className="left2">
        <InfoField />
      </div>
    </div>
  );
}

export default BrowseField;