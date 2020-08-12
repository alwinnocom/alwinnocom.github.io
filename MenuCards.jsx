// Menu_cards.jsx
import React from "react";
import ReactDOM from "react-dom";
import Food_Card from "./subcomponents/Food_Card";

// function MenuCards() {
//     return <div className="menu-cards">
//             <Food_Card />
//             <Food_Card />
//             <Food_Card />
//             <Food_Card />
//             <Food_Card />
//             <Food_Card />
//     </div>
// }

function MenuCards() {
    return <div className="menu-cards">
            <Food_Card img={require("./pizza.jpg")} />
            <Food_Card img={require("./pizza.jpg")} />
            <Food_Card img={require("./pizza.jpg")} />
            <Food_Card img={require("./pizza.jpg")} />
            <Food_Card img={require("./pizza.jpg")} />
            <Food_Card img={require("./pizza.jpg")} />
    </div>
}

export default MenuCards;