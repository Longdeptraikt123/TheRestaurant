import React from "react";
import './about-us.scss'
import AboutUsImage from '../image/plate.png'
import Roll from 'react-reveal/Roll';
import Slide from 'react-reveal/Slide';

const AboutUs = () => {
    const scrollToNext = () => {
        window.scrollTo(0, 1680)
    }


    return (

        <div id="about-us" className="about-us">

            <div className="about-us_container">
                <Roll left>
                    <div className="about-us_image animate__fadeInRight">
                        <img src={AboutUsImage} alt='#' />
                    </div>
                </Roll>
                <Slide right>
                    <div className="about-us_content">
                        <div>
                            <h1>
                                About us
                            </h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                            <button onClick={scrollToNext} type="button">Know more</button>
                        </div>
                    </div>
                </Slide>
            </div>

        </div>


    )
}
export default AboutUs