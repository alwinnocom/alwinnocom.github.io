import React from "react";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

function FoodCard(props) {
    return <div>
                <h1>{props.name}</h1>
                <img src={props.img} alt="There is no food here yet" />
           </div>
}

export default FoodCard;
