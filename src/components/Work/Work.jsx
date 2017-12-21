import React from 'react';
import {
    Parallax,
    Button,
    Col,
    Chip} from 'react-materialize'
import './Work.css'


const Work = (props) => {
    return (
        props.projects.map((project, idx) => 
        <div className="parallaxDiv" key={idx}>
            <h2>{project.name}</h2>
            <Parallax imageSrc={project.img}/>
                <div className="section white">
                    <div className="row container">
                        <h4>{project.name}</h4>
                        <div className="container disp-icon">
                        <div className="description">
                            <p className="grey-text text-darken-3 lighten-3">{project.description}</p>
                        </div>
                        <div className="container icons">
                            {project.keyWords.map((key, idx) => 
                            <Col s={3} key={idx}>
                                <Chip>
                                    <i className={key.icon}></i>
                                    &nbsp;&nbsp;
                                    {key.keyword}
                                </Chip>
                            </Col>
                            )}
                        </div>
                        </div>
                        <br />
                        <br />
                        <Button target="_blank" node='a' href={project.liveURL}>Visit</Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Button target="_blank" node='a'href={project.repoURL}>Github Repo</Button>
                    </div>
                </div>
        </div>
        )
    )
}

export default Work