import React from 'react';
import {Parallax} from 'react-materialize'

const Work = () => {
    return (
        <div>
            <h1>Work</h1>
                <h2 className="alienSweeper">Alien Sweeper</h2>
                <Parallax imageSrc="https://i.imgur.com/H8FWCP3.png"/>
                    <div className="section white">
                        <div className="row container">
                            <h4 className="alienSweeper">Alien Sweeper</h4>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
                <h2 className="alienSweeper">WhatCha Think</h2>
                <Parallax imageSrc="https://i.imgur.com/5ZI4Ie3.png"/>
                    <div className="section white">
                        <div className="row container">
                            <h4 className="alienSweeper">WhatCha Think</h4>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
                <h2 className="alienSweeper">Divide and Costco</h2>
                <Parallax imageSrc="https://i.imgur.com/CrRa6CK.png"/>
                    <div className="section white">
                        <div className="row container">
                            <h4 className="alienSweeper">Divide and Costco</h4>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
            <h2 className="alienSweeper">Project 4</h2>
                <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                    <div className="section white">
                        <div className="row container">
                            <h4 className="alienSweeper">Project 4</h4>
                            <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
        </div>
    )
}

export default Work