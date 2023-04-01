import React from "react";
import data from './data'
import menuImage from '../image/menu.png'
import './menu.scss'
import Slide from 'react-reveal/Slide';
const Menu = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('award');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id="menu" className="menu">
            <div className="menu_heading">
                <span>Where every flavor tells a story.</span>
                <h1>Today's Special</h1>
            </div>
            <div className="menu_content">
                <Slide left>
                    <div className="menu_content_food">
                        <h1>Chips and Dishes</h1>
                        {data.foods.map((food, index) => (
                            <div className="menu_content_food_detail-1">
                                <div className="menu_content_food-desc">
                                    <span>
                                        {food.title}
                                    </span>
                                    <span className="cocktail-tag">
                                        {food.tags}
                                    </span>
                                </div>
                                <div className="menu_content_food_dash" />
                                <div className="menu_content_food-price">
                                    <span>
                                        {food.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slide>
                <Slide bottom>
                    <div className="menu_content_image">
                        <img src={menuImage} alt='#' />
                    </div>
                </Slide>
                <Slide right>
                    <div className="menu_content_food">
                        <h1>Wines and Cocktails</h1>
                        {data.wines.map((wine, index) => (
                            <div className="menu_content_food_detail-2">
                                <div className="menu_content_food-desc">
                                    <span>
                                        {wine.title}
                                    </span>
                                    <span>
                                        {wine.tags}
                                    </span>
                                </div>
                                <div className="menu_content_food_dash"></div>
                                <div className="menu_content_food-price">
                                    <span>
                                        {wine.price}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Slide>
            </div>
            <Slide top>
                <div className="menu_food-button">
                    <button onClick={handleClickScroll} type="button">Know more</button>
                </div>
            </Slide>
        </div>
    )
}
export default Menu