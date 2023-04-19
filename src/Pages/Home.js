import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Slideshow from '../Component/Slideshow'

const Home = ()=>{
    const [slideshowIndex, setSlideshowIndex] = useState(0);
    const [donationCount, setDonationCount] = useState(0);
    const [requestCount, setRequestCount] = useState(0);
    const [name,setName] = useState("User Name");

      const IMAGES = [
        'https://via.placeholder.com/500x300.png?text=Slide+1',
        'https://via.placeholder.com/500x300.png?text=Slide+2',
        'https://via.placeholder.com/500x300.png?text=Slide+3',
        'https://via.placeholder.com/500x300.png?text=Slide+4',
      ];

    return (
        <div>
            <div>Hi {name}</div>
            <div className="profile-menu-button"><Link to='/complete-profile'>Complete Profile</Link></div>
            <div className="request-blood-button">Request for Blood Button</div>
            <div className="slideshow-window">
            <Slideshow images={IMAGES} />
            </div>
            <div className="donation-count-button">
                Donation Count: {donationCount}
            </div>
            <div className="request-count-button">
                Request Count: {requestCount}
            </div>
        </div>
    );
};

export default Home;