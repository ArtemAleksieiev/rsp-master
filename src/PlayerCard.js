/* eslint no-eval: 0 */
/*eslint-disable no-unused-vars*/
import React from 'react';


const scissors = "https://i.imgur.com/pgjyhIZ.png";
const rock = "https://i.imgur.com/LghSkIw.png";
const paper = "https://i.imgur.com/2gsdqvR.png";

const PlayerCard = (props) => {
return(
    <div className="player-card">
    <img  src={eval(props.sign)} alt="img"/>
    </div>
  )
};

export default PlayerCard;
