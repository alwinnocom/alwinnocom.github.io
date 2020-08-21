import React from "react";

// https://stackoverflow.com/questions/43823289/how-to-import-image-svg-png-in-a-react-component

function MenuRow(props) {
    return <div className="aligned-menu">
               {/* <p>{props.name}</p>
               <p>{props.price}</p>
               <img src={props.img} alt="There is no food here yet" /> */}

               <div>
                    <div className="menu-name-description"><p>{props.name}</p><p>{props.description}</p></div>
               </div>
               <div><p>{props.price}</p></div>
               <div><img src={props.img} alt="There is no food here yet" /></div>
           </div> 
}

export default MenuRow;
