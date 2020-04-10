import React from 'react';

const About = () => {
    return (
        <div className="card-secondary">
            <div className="row">
                <div className="col s12 m9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                <div className="col s12 m3">
                    <img src="https://www.lendacademy.com/wp-content/uploads/2015/05/Marketplace-Lending-News.jpg" style={imageStyle} alt="new" />
                </div>
            </div>
            <div className="row">
                <div className="col s12 m3">
                    <img src="https://www.albertadoctors.org/images/ama-master/feature/Stock%20photos/News.jpg" style={imageStyle} alt="news" />
                </div>
                <div className="col s12 m9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
            </div>
        </div>
    );
}

const imageStyle = {
    width: '100%',
}

export default About;
