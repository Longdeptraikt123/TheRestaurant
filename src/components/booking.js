import React, { useState } from "react";
import './booking.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import { FaUserAlt, FaCalendar, FaClock } from 'react-icons/fa';
import arrowImg from '../image/model-white.png'
import Fade from 'react-reveal/Fade';
const Booking = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [value, setValue] = useState('10:00');

    return (
        <div id="booking" className="booking">
            <div className="booking_container">
                <div className="booking_heading">
                    <h1>Booking Form</h1>
                    <div>
                        <img src={arrowImg} alt="#" />
                    </div>
                    <p>
                        Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.<br /> Reservations required for parties of 6 or more.
                    </p>
                </div>
                <Fade top cascade>
                    <form>
                        <div className="form_date">
                            <div className="form_label">
                                <FaCalendar />
                                <span>Choose Day</span>
                            </div>
                            <DatePicker className="input" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form_date">
                            <div className="form_label-time">
                                <FaClock />
                                <span>Choose Time</span>
                            </div>
                            <TimePicker
                                className="input-time"
                                clearIcon={false}
                                clockIcon={false}
                                onChange={setValue}
                                value={value}
                            />
                        </div>
                        <div className="form_date">
                            <div className="form_label">
                                <FaUserAlt />
                                <span>How many people ?</span>
                            </div>
                            <input className="input" type='text' placeholder="6 persons..." />
                        </div>
                    </form>
                </Fade>
                <div className="booking_submit">
                    <button onClick={() => alert('Your request has been sent')} className="booking_btn" type="button">Book tables now!</button>
                </div>
            </div>
        </div>
    )
}
export default Booking