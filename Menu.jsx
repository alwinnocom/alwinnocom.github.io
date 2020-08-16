// Menu.jsx
import React from "react";
import MenuRow from "./subcomponents/MenuRow";

function Menu() {
    return <div className="menu">
                <h1>Menu</h1>
                <MenuRow name="Gyro" price="$10" img={require("./gyros.jpg")}/>
                <MenuRow name="Pizza" price="$9" img={require("./pizza.jpg")}/>
                <MenuRow name="Hamburger" price="$7" img={require("./hamburger.jpg")}/>
                <MenuRow name="Steak" price="$12" img={require("./steak.jpg")}/>
                <MenuRow name="Fruit Salad" price="$4" img={require("./fruit-salad.jpg")}/>
                <MenuRow name="Gelato Geysers" price="$6" img={require("./gelato.jpg")}/>
                <MenuRow name="Beverages" price="$2.50" img={require("./coca-cola.jpg")}/>
           </div>
}

// function Menu() {
//         return <div className="menu">
//                     <h1>Menu</h1>
//                     <MenuRow />
//                     <MenuRow />
//                     <MenuRow />
//                     <MenuRow />
//                     <MenuRow />
//                     <MenuRow />
//                     <MenuRow />
//                </div>
//     }

export default Menu;