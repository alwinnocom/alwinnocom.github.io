import React from "react";
import ReactDOM from "react-dom";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

// function Menu_Row() {
//     return <div>
//                <p>Food</p>
//                <p>$10</p>
//                <img src={require("./pizza.jpg")} alt="There is no image here yet" />
//            </div> 
// }

function Menu_Row(props) {
    return <div>
               <p>Food</p>
               <p>$10</p>
               <img src={props.img} alt="There is no image here yet" />
           </div> 
}

export default Menu_Row;