import React from "react";
import './chef.scss'
import chefImg from '../image/chef.png'
import signatureImg from '../image/signature.png'
import Fade from 'react-reveal/Fade';

const Chef = () => {
    return (
        <div id="chef" className="chef">
            <Fade left>
                <div className="chef_content" >
                    <span style={{ fontSize: '25px' }}>Our Team</span>
                    <h1>Meet Our Chef</h1>
                    <div className="chef_text">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <h2>Kevin Luo</h2>
                    <span>Executive Chef</span>
                    <div className="chef_sign">
                        <img src={signatureImg} alt="#" />
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="chef_img">
                    <img src={chefImg} alt="#" />
                </div>
            </Fade>
        </div>
    )
}
export default Chef