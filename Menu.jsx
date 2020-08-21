// Menu.jsx
import React from "react";
import MenuRow from "./subcomponents/MenuRow";

function Menu() {
    return <div className="menu">
                <h1>Menu</h1>
                <MenuRow name="Steak" description="Chicken-fried steak." price="$12" img={require("./steak.jpg")}/>
                <MenuRow name="Pizza" description="Your choice of mozzarella cheese, pepperoni, or vegetarian." price="$9" img={require("./pizza.jpg")}/>
                <MenuRow name="Hamburger" description="Enjoy a classic hamburger with your choice of cheese, lettuce, tomatoes, bacon, and more." price="$7" img={require("./hamburger.jpg")}/>
                <MenuRow name="Gyro" description="Gyros inspired by Greek cuisine." price="$10" img={require("./gyros.jpg")}/>
                <MenuRow name="Fruit Salad" description="Enjoy the fruits of a bountiful harvest." price="$4" img={require("./fruit-salad.jpg")}/>
                <MenuRow name="Gelato Geysers" description="Delicate frozen treat." price="$6" img={require("./gelato.jpg")}/>
                <MenuRow name="Beverages" description="Choose Coca-Cola, Pepsi, Sprite, Apple Juice, Orange Juice, Milk, Tea, or Coffee." price="$2.50" img={require("./coca-cola.jpg")}/>
           </div>
}

export default Menu;