import React from "react";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

// function MenuRow() {
//     return <div>
//                <p>Food</p>
//                <p>$10</p>
//                <img src={require("./pizza.jpg")} alt="There is no food here yet" />
//            </div> 
// }

function MenuRow(props) {
    return <div>
               {/* <p>{props.name}</p>
               <p>{props.price}</p>
               <img src={props.img} alt="There is no food here yet" /> */}

               <div><p>{props.name}</p></div>
               <div><p>{props.price}</p></div>
               <div><img src={props.img} alt="There is no food here yet" /></div>
           </div> 
}

export default MenuRow;