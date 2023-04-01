import React, { useRef } from "react";
import './testimonial.scss'
import arrowImg from '../image/model-white.png'
import background from '../image/bg.png'
import { BsArrowLeftCircle, BsArrowRightCircle, BsInstagram } from "react-icons/bs";
import data from "./data";

const Testimonial = () => {
    const scrollRef = useRef(null)
    const scroll = (direction) => {
        // su dung destructing cho current de vua gan current vua lay' duoc current
        const { current } = scrollRef
        direction === 'left' ? current.scrollLeft -= 300 : current.scrollLeft += 300
    }
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'

        }}
            id="testimonial" className="testimonial">
            <div className="testimonial_heading">
                <h1>
                    Photo Gallery
                </h1>
                <span>Instagram</span>
                <div>
                    <img src={arrowImg} alt="#" />
                </div>
            </div>
            <div className="testimonial_images">
                <div className="testimonial_images_container" ref={scrollRef}>
                    {data.images.map((image, index) => (
                        <div key={index} className="testimonial_images_card">
                            <img src={image} alt="#" />
                            <BsInstagram className="instagram" />
                        </div>
                    ))}
                </div>
                <div className="testimonial_images_arrow">
                    <BsArrowLeftCircle onClick={() => scroll('left')} />
                    <BsArrowRightCircle onClick={() => scroll('right')} />
                </div>
            </div>
        </div>
    )
}
export default Testimonial