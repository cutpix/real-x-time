import React from 'react';

const Hero = (props) => {
    return (
        <section className="hero">
            <div className="container clearfix">
                <div className="info">
                    <section className="cd-intro">
                        <h1>{props.heading}</h1>
                    </section>
                    <h2>{props.description}</h2>
                </div>
                <div className="presentation">
                    {props.children}
                </div>
            </div>
        </section>
    );
};

export default Hero;