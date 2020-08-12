// Menu.jsx
import React from "react";
import ReactDOM from "react-dom";
import Menu_Row from "./subcomponents/Menu_Row";

function Menu() {
    return <div className="menu">
                <h1>Menu</h1>
                <Menu_Row />
                <Menu_Row />
                <Menu_Row />
                <Menu_Row />
                <Menu_Row />
                <Menu_Row />
                <Menu_Row />
           </div>
}

// function Menu() {
//     return <div className="menu">
//                 <h1>Menu</h1>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div> 
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//                 <div><p>Food</p><p>$10</p><img alt="Food here"></img></div>
//            </div>
// }

export default Menu;