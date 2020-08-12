// Menu_cards.jsx
import React from "react";
import ReactDOM from "react-dom";
import Food_Card from "./subcomponents/Food_Card";

function Menu_cards() {
    return <div className="menu-cards">
            <Food_Card />
            <Food_Card />
            <Food_Card />
            <Food_Card />
            <Food_Card />
            <Food_Card />
    </div>
}

// function Menu_cards() {
//     return <div className="menu-cards">
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//             <div>
//                 <img alt="There is no image here yet."></img>
//                 <h1>Gyros</h1>
//             </div>
//     </div>
// }

export default Menu_cards;