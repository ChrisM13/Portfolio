import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div className="home">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="welcome">
                <h1 className="hello">Hello!</h1>
                <h1 className="name">I'm Chris Mosier</h1>
                <h1 className="statement">and I am a Web Developer</h1>
            </div>
            <video type="video/mp4" autoPlay loop id="video-background" muted>
                <source src="assets/video/portfolioVid.mp4" />
            </video>
        </div>
    )
}

export default Home