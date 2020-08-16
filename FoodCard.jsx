import React from "react";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

// function FoodCard() {
//     return <div>
//                 <img src={require("./pizza.jpg")} alt="There is no food here yet" />
//                 <h1>Gyros</h1>
//            </div>
// }

function FoodCard(props) {
    return <div>
                <img src={props.img} alt="There is no food here yet" />
                <h1>{props.name}</h1>
           </div>
}

export default FoodCard;