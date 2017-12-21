import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="page-footer center-align transparent" id="contact">

            <div className="footer-copyright transparent">
            © 2018 Chris Mosier
            </div>
            <a href="mailto:chrismosier13@gmail.com" target="_blank" className="btn-floating light-blue darken-3"><i className="fa fa-envelope" aria-hidden="true"></i></a>
            <a href="https://github.com/ChrisM13" target="_blank" className="btn-floating light-blue darken-3"><i className="devicon-github-plain" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/chrismosier13" target="_blank" className="btn-floating light-blue darken-3"><i className="fa fa-linkedin" aria-hidden="true"></i></a>


        </footer>
    )
}

export default Footer