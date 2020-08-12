// Menu.jsx
import React from "react";
import ReactDOM from "react-dom";
import Menu_Row from "./subcomponents/Menu_Row";

function Menu() {
    return <div className="menu">
                <h1>Menu</h1>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
                <Menu_Row img={require("./pizza.jpg")}/>
           </div>
}

// function Menu() {
//         return <div className="menu">
//                     <h1>Menu</h1>
//                     <Menu_Row />
//                     <Menu_Row />
//                     <Menu_Row />
//                     <Menu_Row />
//                     <Menu_Row />
//                     <Menu_Row />
//                     <Menu_Row />
//                </div>
//     }

export default Menu;