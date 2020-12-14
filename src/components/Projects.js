import React from 'react';
import PropTypes from 'prop-types';

const Projects = props => {

    const projects = [
        {name:'HoyHoyHabatni', icon: 'flaticon-analysis', link: 'https://moez-rt.github.io/HoyHoyHabatni/',
            description: 'Carpooling webapp using Django & Angular'},
        {name:'Flip-Card-Game', icon: 'flaticon-ideas', link: 'https://github.com/moez-RT/flip-game-flutter',
            description: 'Flip game using Django & Flutter'},
        {name:'BMI calculator', icon: 'flaticon-innovation', link: 'https://github.com/moez-RT/BMI-calculator',
            description: 'Check if your are healthy or not !'},


    ]
    return (
        <section className="ftco-section" id="projects-section">
            <div className="container-fluid px-md-5">
                <div className="row justify-content-center py-5 mt-5">
                    <div className="col-md-12 heading-section text-center ftco-animate">
                        <h1 className="big big-2">Projects</h1>
                        <h2 className="mb-4">Projects</h2>
                        <p>“If you want something new, you have to stop doing something old”</p>
                    </div>
                </div>
                <div className="row">
                    {projects.map((val,index) => (
                        <div key={index} className="col-md-4 text-center d-flex ftco-animate">
                            <a className="services-1 shadow">
							<span className="icon">
								<i className={val.icon}/>
							</span>
                                <div className="desc">
                                    <h3 className="mb-5">{val.name}</h3>
                                    <p>{val.description}</p>
                                </div>
                                <button className="btn btn-secondary"><a href={val.link} target="_blank">See</a></button>
                            </a>
                        </div>

                    ))}

                </div>
            </div>
        </section>

    );
};

Projects.propTypes = {

};

export default Projects;
