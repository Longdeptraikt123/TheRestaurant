import React, { useState, useEffect } from 'react'
import './navbar.scss'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdOutlineRestaurantMenu } from 'react-icons/md'


const Navbar = () => {
    const [isShow, setIsShow] = useState(false)
    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }

    const handleShow = () => {
        window.scrollY > 50 ? setIsShow(true) : setIsShow(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleShow)
        return () => window.removeEventListener('scroll', handleShow)
    }, [])

    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className={`navbar ${isShow && 'navbar_grey'}`}>
            <div onClick={scrollToTop} className='navbar_logo'>
                <span>Ｒｅｓｔａｕｒａｎｔ</span>
            </div>
            <div className='navbar_links'>
                <ul>
                    <li className='navbar_link'><a href='/TheRestaurant' >Home</a></li>
                    <li className='navbar_link'><a href='#about-us'>About us</a></li>
                    <li className='navbar_link'><a href='#menu'>Menu</a></li>
                    <li className='navbar_link'><a href='#chef'>Chef</a></li>
                    <li className='navbar_link'><a href='#testimonial'>Testimonial</a></li>
                </ul>
            </div>
            <div className='navbar_log-in'>
                <a href='/login' className='navbar_link'>Log in / Register</a>
                <div />
                <a href='#booking' className='navbar_link'>Book Table</a>
            </div>
            <div className='navbar_links_hamburger_small-screen'>
                <RxHamburgerMenu color='#fff' fontSize={25} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className='navbar_links_main_small-screen'>
                        <MdOutlineRestaurantMenu className='navbar_links_main_small-screen_close' fontSize={25} onClick={() => setToggleMenu(false)} />
                        <ul className='navbar_links_main_small-screen-ul'>
                            <li className='navbar_link'><a onClick={() => setToggleMenu(false)} href='/'>Home</a></li>
                            <li className='navbar_link'><a onClick={() => setToggleMenu(false)} href='#about-us'>About us</a></li>
                            <li className='navbar_link'><a onClick={() => setToggleMenu(false)} href='#menu'>Menu</a></li>
                            <li className='navbar_link'><a onClick={() => setToggleMenu(false)} href='#chef'>Chef</a></li>
                            <li className='navbar_link'><a onClick={() => setToggleMenu(false)} href='#testimonial'>Testimonial</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar