import { Button } from '@material-ui/core'
import React, { useState } from 'react';
import Pizza from './Components/Pizza';
import Burger from './Components/Burger';
import Chickens from './Components/Chicken';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './OurMenu.css';

const initialMenu = () => {
    return <h3>choose a category  <ArrowUpwardIcon/></h3>
}

function OurMenu() {
    const [allMenu, setAllMenu] = useState(() => initialMenu())

    const pizzas = () => {
        setAllMenu(<Pizza/>)
    }
    const Burgers = () => {
        setAllMenu(<Burger/>)
    }
    const Chicken = () => {
        setAllMenu(<Chickens/>)
    }
    const Sandwich = () => {
        setAllMenu(<h1>Sandwich</h1>)
    }
    const Shawarma = () => {
        setAllMenu(<h1>Shawarma</h1>)
    }
    const Kebab = () => {
        setAllMenu(<h1>Kebab</h1>)
    }

    return (
        <div className="ourMenu">
            <h3 id="title">Our Menu</h3>
            <p id="subtitle">Deliciousness jumping into the mouth</p>
            <div className="ourMenu__types">
                <Button onClick={pizzas}>Pizza</Button>
                <Button onClick={Burgers}>Burgers</Button>
                <Button onClick={Chicken}>Chicken</Button>
                <Button onClick={Sandwich}>Sandwich</Button>
                <Button onClick={Shawarma}>Shawarma</Button>
                <Button onClick={Kebab}>Kebab</Button> 
                <Button onClick={Kebab}>salads</Button> 
                <Button onClick={Kebab}>pastries</Button>                
            </div>
            <div>
                {allMenu}
            </div>
        </div>
    )
}

export default OurMenu
