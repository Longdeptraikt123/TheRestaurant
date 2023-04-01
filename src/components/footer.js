import React from "react";
import './footer.scss'
import footerImg from '../image/footer.png'
import data from "./data";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
    const dataContact = data?.footerData?.contact
    const dataHoursTitle = data?.footerData?.hours?.title
    const dataHours1 = data?.footerData?.hours?.program[0]
    const dataHours2 = data?.footerData?.hours?.program[1]
    return (
        <div
            style={{
                backgroundImage: `url(${footerImg})`,
            }}
            className="footer">
            <div className="footer_container">
                <div className="footer_item item-1">
                    <div className="footer_item_heading">
                        <h2>
                            {dataContact.title}
                        </h2>
                    </div>
                    <div className="footer_item_content">
                        <div className="footer_item_content_contact">
                            <span>{dataContact.address}</span>
                            <span>{dataContact.phone}</span>
                        </div>
                    </div>
                </div>

                <div className="footer_item">
                    <div className="footer_item_heading">
                        <h2>
                            {dataHoursTitle}
                        </h2>
                    </div>
                    <div className="footer_item_content">
                        <div className="footer_item_content_hours">
                            <span>{dataHours1?.days}</span>

                            <span style={{
                                color: '#FE6244',
                                fontSize: '20px'
                            }}>{dataHours1?.hours}</span>
                        </div>
                        <br />
                        <div className="footer_item_content_hours">
                            <span>{dataHours2?.days}</span>

                            <span style={{
                                color: '#FE6244',
                                fontSize: '20px'
                            }}>{dataHours2?.hours}</span>
                        </div>

                    </div>
                </div>
                <div className="footer_item_icons">
                    <BsFacebook className="icon" />
                    <BsTwitter className="icon" />
                    <BsInstagram className="icon" />
                    <BsYoutube className="icon" />
                </div>
            </div>
        </div>
    )
}
export default Footer
