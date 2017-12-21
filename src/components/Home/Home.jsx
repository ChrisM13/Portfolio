import React from 'react';
import Typed from 'typed.js';
import './Home.css'




const Home = () => {
    return (
        <div>
            <div class="typed_wrap">
                <h1><span id="typedTop"></span></h1>
                <h1><span id="typedBottom"></span></h1>
            </div>
            <video type="video/mp4" autoPlay loop id="video-background" muted>
                <source src="assets/video/portfolioVid.mp4" />
            </video>
        </div>
    )
}

export default Home