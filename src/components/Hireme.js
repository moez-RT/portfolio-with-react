import React from 'react';
import PropTypes from 'prop-types';
import {linkedInUrl, githubUrl} from '../utils';

const Hireme = props => {
    return (
        <section className="ftco-section ftco-hireme img hire-me-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 ftco-animate text-center">
                        <h2>I'm <span>Available</span> for internship</h2>
                        <p>"The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it."</p>
                        <p className="mb-0"><a href={linkedInUrl} target="_blank" className="btn btn-secondary py-3 px-5">Contact me</a></p>
                    </div>
                </div>
            </div>
        </section>

    );
};

Hireme.propTypes = {

};

export default Hireme;
