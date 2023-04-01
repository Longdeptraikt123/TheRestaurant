import React from "react";
import './home.scss'
import homeImage from '../image/homeImg.jpeg'
import Fade from 'react-reveal/Fade';

const Home = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('menu');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div id="home" className="home">
            <Fade top>
                <div className="home_content">
                    <h3>
                        Chase The New Flavor
                    </h3>
                    <h1>
                        The Key To Fine Dining
                    </h1>
                    <p>
                        Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus
                    </p>
                    <button onClick={handleClickScroll} type="button">Explore menu</button>
                </div>
            </Fade>
            <Fade top>
                <div className="home_image">
                    <img src={homeImage} alt="#" />
                </div>
            </Fade>
        </div>
    )
}
export default Home