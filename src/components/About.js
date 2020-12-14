import React from 'react';
import {githubUrl, linkedInUrl} from '../utils';

const About = props => {
    return (
        <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
            <div className="container">
                <div className="row d-flex no-gutters">
                    <div className="col-md-6 col-lg-6 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay"></div>
                            <div data-aos="fade-right"
                                 className="img d-flex align-self-stretch align-items-center about-bg"
                            >

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate">
                                <h1 className="big">About</h1>
                                <h2 className="mb-4">About Me</h2>
                                <p>I'm a student in 2nd Cycle Engineer in Computer Networks and Telecommunications at
                                    the
                                    National Institute of Applied Sciences and Technologies
                                    <b>(INSAT)</b></p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    <li className="d-flex"><span><i className="icon-user"/> Name:</span> <span>Moez Saidi</span>
                                    </li>
                                    <li className="d-flex"><span><i className="icon-calendar"/> Age:</span>
                                        <span>22</span></li>
                                    <li className="d-flex"><span><i className="icon-address-card"/> Address:</span>
                                        <span>Manouba, Tunisia</span></li>
                                    <li className="d-flex"><span><i className="icon-envelope"/> Email:</span> <span><a
                                        href="mailto:saidi.moez.2014@gmail.com">saidi.moez.2014@gmail.com</a></span>
                                    </li>
                                    <li className="d-flex"><span><i className="icon-phone"/> Phone: </span> <span>+216 26 992 291</span>
                                    </li>
                                        <ul className="ftco-footer-social list-unstyled ml-5 float-left mt-3  rounded p-3">
                                            <li className="ftco-animate"><a><span className="icon-facebook"/></a></li>
                                            <li className="ftco-animate"><a target="_blank" href={linkedInUrl}><span
                                                className="icon-linkedin"/></a></li>
                                            <li className="ftco-animate"><a target="_blank" href={githubUrl}><span
                                            className="icon-github "/></a></li>
                                        </ul>
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap ftco-animate d-flex mt-md-3">
                            <div className="text">

                                <p><a href="assets/files/Moez_Saidi.pdf" download className="btn btn-primary py-3 px-3">Download
                                    CV</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

About.propTypes = {};

export default About;
