import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import Clubs from "./Clubs";
import Resume from "./Resume";
import Projects from "./Projects";
import Hireme from "./Hireme";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = props => {
    return (
        <React.Fragment>


            <Navbar/>
            <Welcome/>
            <About/>
            <Clubs/>
            <Resume/>
            <Projects/>
            <Hireme/>
            <Contact/>
            <Footer/>












            {/*//  loader -->*/}
            {/*<div id="ftco-loader" className="show fullscreen">*/}
            {/*  <svg className="circular" width="48px" height="48px">*/}
            {/*    <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>*/}
            {/*    <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"*/}
            {/*            stroke="#F96D00"/>*/}
            {/*  </svg>*/}
            {/*</div>*/}
        </React.Fragment>
    );
};

Home.propTypes = {

};

export default Home;
