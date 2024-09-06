import React from "react";
import './StayConnected.css'
import { Link } from 'react-router-dom'

export default function StayConnected(){
    return(
        <div className="stayConnectedCard">
            <div className="stayConnected-title">Stay Connected: Join Our Community</div>
            <div className="stay-connected-cards-parent">

                <div className="stayConnected-card-newsletter">
                    <div className="newsletter">Newsletter Sign-Up: Subscribe to our monthly newsletter to get the latest updates delivered straight to your inbox.</div>
                    <Link to="/login"><button className="newsletter-button">Join Now</button></Link>
                </div>


                <div className="stayConnected-card-social">
                    <div className="socialTitle">Be connect directly with our socials</div>
                    <div className="social-icons">
                        <a href=""></a><div className="git"></div>
                        <div className="tg"></div>
                        <div className="whats"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}