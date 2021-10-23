import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/bgnew.jpg';
import '../styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Welcome to Tommy's Shop</h1>
                <h3>GRAB YOUR ORDER NOW </h3>
                <Link to="/menu">
                    <button> ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;
