import React from 'react';
import PropTypes from 'prop-types';
import {linkedInUrl, githubUrl} from '../utils';

const Footer = props => {
    return (
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About</h2>
                            <p>Student in 2nd Cycle Engineer in Computer Networks and Telecommunications at the
                                National Institute of Applied Sciences and Technologies
                                (INSAT)</p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate"><a  target="_blank" href={githubUrl}><span className="icon-github"/></a></li>
                                <li className="ftco-animate"><a href="#"><span className="icon-facebook"/></a></li>
                                <li className="ftco-animate"><a target="_blank" href={linkedInUrl}><span className="icon-linkedin"/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4 ml-md-4">
                            <h2 className="ftco-heading-2">Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Home</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>About</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Skills</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Projects</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Knowledge</h2>
                            <ul className="list-unstyled">
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Web Development</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Cloud</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/>Data Analysis</a></li>
                                <li><a href="#"><span className="icon-long-arrow-right mr-2"/></a>Data Science</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon icon-map-marker"/><span className="text">Manouba, Tunisia</span>
                                    </li>
                                    <li><a href="#"><span className="icon icon-phone"/><span
                                        className="text">+216 26 992 291</span></a></li>
                                    <li><a href="#"><span className="icon icon-envelope"/><span
                                        className="text">saidi.moez.2014@gmail.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved ! Made with <i className="icon-heart color-danger"
                                                                aria-hidden="true"/> by <a
                            href={linkedInUrl} target="_blank">Moez Saidi</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {

};

export default Footer;
