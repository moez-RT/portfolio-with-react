import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {linkedInUrl} from "../utils";

const Resume = props => {
    const state = [
        {
            name: 'Web',
            series: [90, 10],
            options: {
                dataLabels: {
                    enabled: false,

                },

                labels: ['Web', ''],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    },

                }],
                legend: {
                    show: false
                },
                fill: {
                    colors: ['#3F65FF', '#EEEEEE']
                }
            },


        },
        {
            name: 'Mobile',
            series: [75, 25],
            options: {
                dataLabels: {
                    enabled: false,

                },

                labels: ['Mobile', ''],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    },

                }],
                legend: {
                    show: false
                },
                fill: {
                    colors: ['#3F65FF', '#EEEEEE']
                }
            },


        },
        {
            name: 'Cloud',
            series: [60, 40],
            options: {
                dataLabels: {
                    enabled: false,

                },

                labels: ['Cloud', ''],
                chart: {
                    type: 'donut',
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false
                        }
                    },

                }],
                legend: {
                    show: false
                },
                fill: {
                    colors: ['#3F65FF', '#EEEEEE']
                }
            },


        },
    ];
    const frontend = [
        {name: 'Angular', expertise: 75},
        {name: 'React', expertise: 50},
    ];
    const backend = [
        {name: 'Django', expertise: 85},
        {name: 'Laravel', expertise: 70},
        {name: 'Express', expertise: 65},
        {name: 'NestJs', expertise: 50},

    ];
    const database = [
        {name: 'Sql', expertise: 80},
        {name: 'MongoDB', expertise: 65},

    ];
    const programing = [
        {name: 'Python', expertise: 90},
        {name: 'JS/TS', expertise: 85},
        {name: 'Java', expertise: 70},
        {name: 'C++', expertise: 65},
    ];
    const other = [
        {name: 'Git', expertise: 90},
        {name: 'Linux', expertise: 75},
        {name: 'Docker', expertise: 70},
        {name: 'Kubernetes', expertise: 50},

    ];
    const education = [
        {date: '2019-2022', degree: 'Engineer Cycle  in Computer Networks and Telecommunications',
            description: '', place: 'INSAT (National Institute of Applied Sciences and Technologies)'},
        {date: '2017-2019', degree: 'Integrated preparatory cycle MPI (Math Physics Computing)',
            description: '', place: 'INSAT (National Institute of Applied Sciences and Technologies)'},
        {date: '2017', degree: 'Baccalaureate "Experimental Science" with honors',
            description: '', place: 'Ibn Abi Dhief Manouba high school'},
    ];
    const experience = [
        {date: '2020 ( 6 Months )', role: 'Full Stack Developer',
            link:'https://app.eventizer.io/#/', description: 'Work on the Eventizer project which is a large-scale event and convention organization solution', place: 'VAYETEK'},
        {date: '2020 ( 1 Month )', role: 'Data Analyst',
            link:'', description: 'Analysis of data from a survey taken by students', place: 'NAXXUM MEA'},

    ];

    const awards = [
        {date: '2020', certificate: 'Flutter',
            link: 'https://www.udemy.com/certificate/UC-be539c24-1e4f-418c-8d2f-8123af936d97/', from: 'Udemy'},
        {date: '2020', certificate: 'Personal Development',
            link: 'https://insidesherpa.s3.amazonaws.com/completion-certificates/Microsoft/ms2CK9b2SCWGXwPMS_Microsoft_vTnXk3aQqX5g9mYha_completion_certificate.pdf?fbclid=IwAR2Kl3KdgSBDCF52UxyHhL_f6p9U14mxWPAbuBDhCWBcLuZ6QgbHAHnQuKg', from: 'Microsoft'},
        {date: '2020', certificate: 'AWS',
            link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/H7H3XF7SWLUK', from: 'Coursera'},
        {date: '2019', certificate: 'Django',
            link: 'https://www.udemy.com/certificate/UC-7319XAOS/', from: 'Udemy'},
        {date: '2019', certificate: 'Data Science',
            link: 'https://www.datacamp.com/statement-of-accomplishment/track/f4a91f0f99f1bf63dab3568ce75caa435a1729e9', from: 'DataCamp'},

    ];


    return (
        <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
            <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Resume</h1>
                <h2 className="mb-4">Resume</h2>
                <p>“If you're waiting until you feel talented enough to make it, you'll never make it.”</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <nav id="navi">
                            <ul>
                                <li><a href="#page-1">Education</a></li>
                                <li><a href="#page-2">Experience</a></li>
                                <li><a href="#page-3">Skills</a></li>
                                <li><a href="#page-4">Awards</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        <div id="page-1" className="page one">
                            <h2 className="heading">Education</h2>
                            {education.map((val) => (
                                <div key={val.date} className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas"></span>
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">{val.date}</span>
                                        <h2>{val.degree}</h2>
                                        <span className="position">{val.place}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div id="page-2" className="page two">
                            <h2 className="heading">Experience</h2>
                            { experience.map((val) => (
                                <div key={val.date} className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas"/>
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">{val.date}</span>
                                        <h2>{val.role}</h2>
                                        <span className="position">{val.place}</span>
                                        <p>{val.description}</p>
                                    </div>
                                    {val.link &&   <p className="mb-0"><a href={val.link} target="_blank" className="btn btn-secondary py-3 px-5">Take a look</a></p>
                                    }
                                </div>

                            ))}

                        </div>
                        <div id="page-3" className="page three">
                            <h2 className="heading">Skills</h2>
                            <div className="row progress-circle mb-5">
                                {state.map((techno) => (
                                    <div key={techno.name} className="col-lg-4 mb-4">
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <h2 className="h5 font-weight-bold text-center mb-4">{techno.name}</h2>

                                            <ReactApexChart options={techno.options} series={techno.series}
                                                            type="donut"/>

                                            {/*//  END*/}

                                            {/*Demo info -->*/}
                                            <div className="row text-center mt-4">
                                                <div className="col-6 border-right">
                                                    <div className="h4 font-weight-bold mb-0"></div>
                                                    <span className="small text-gray"></span>
                                                </div>
                                                <div className="col-6">
                                                    <div className="h4 font-weight-bold mb-0"></div>
                                                    <span className="small text-gray"></span>
                                                </div>
                                            </div>
                                            {/*END -->*/}
                                        </div>
                                    </div>
                                ))}


                            </div>


                            <div className="row">
                                <h3 className="heading col-md-12">Backend</h3>
                                {backend.map((val) => (<div key={val.name} className="col-md-6 animate-box">
                                    <div  className="progress-wrap ftco-animate">
                                        <h3>{val.name}</h3>
                                        <div className="progress">
                                            <div className="progress-bar color-1" role="progressbar" aria-valuenow={val.expertise}
                                                 aria-valuemin="0" aria-valuemax="100" style={{width: val.expertise + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                                <h3 className="heading col-md-12">Frontend</h3>
                                {frontend.map((val) => (<div key={val.name} className="col-md-6 animate-box">
                                    <div  className="progress-wrap ftco-animate">
                                        <h3>{val.name}</h3>
                                        <div className="progress">
                                            <div className="progress-bar color-1" role="progressbar" aria-valuenow={val.expertise}
                                                 aria-valuemin="0" aria-valuemax="100" style={{width: val.expertise + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                                <h3 className="heading col-md-12">Programming</h3>
                                {programing.map((val) => (<div key={val.name} className="col-md-6 animate-box">
                                    <div  className="progress-wrap ftco-animate">
                                        <h3>{val.name}</h3>
                                        <div className="progress">
                                            <div  key={val.name}className="progress-bar color-1" role="progressbar" aria-valuenow={val.expertise}
                                                 aria-valuemin="0" aria-valuemax="100" style={{width: val.expertise + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                                <h3 className="heading col-md-12">Database</h3>
                                {database.map((val) => (<div key={val.name} className="col-md-6 animate-box">
                                    <div className="progress-wrap ftco-animate">
                                        <h3>{val.name}</h3>
                                        <div key={val.name} className="progress">
                                            <div className="progress-bar color-1" role="progressbar" aria-valuenow={val.expertise}
                                                 aria-valuemin="0" aria-valuemax="100" style={{width: val.expertise + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                                <h3 className="heading col-md-12">Other skills</h3>
                                {other.map((val) => (<div key={val.name} className="col-md-6 animate-box">
                                    <div  className="progress-wrap ftco-animate">
                                        <h3>{val.name}</h3>
                                        <div className="progress">
                                            <div className="progress-bar color-1" role="progressbar" aria-valuenow={val.expertise}
                                                 aria-valuemin="0" aria-valuemax="100" style={{width: val.expertise + '%'}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}


                            </div>
                        </div>
                        <div id="page-4" className="page four">
                            <h2 className="heading">Awards</h2>
                            {awards.map((val) => (
                                <div key={val.certificate} className="resume-wrap d-flex ftco-animate">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className="flaticon-ideas"/>
                                    </div>
                                    <div className="text pl-3">
                                        <span className="date">{val.date}</span>
                                        <h2>{val.certificate}</h2>
                                        <span className="position btn btn-primary py-3 px-4">{val.from}</span>
                                        <p className="mb-0 mt-2"><a href={val.link} target="_blank" className="btn btn-secondary py-2 px-3">See Credentials</a></p>

                                    </div>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};


export default Resume;
