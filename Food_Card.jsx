import React from "react";
import ReactDOM from "react-dom";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

// function Food_Card() {
//     return <div>
//                 <img src={require("./pizza.jpg")} alt="There is no image here yet" />
//                 <h1>Gyros</h1>
//            </div>
// }

function Food_Card(props) {
    return <div>
                <img src={props.img} alt="There is no image here yet" />
                <h1>{props.name}</h1>
           </div>
}

export default Food_Card;