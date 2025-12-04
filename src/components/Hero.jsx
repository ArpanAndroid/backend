import React from 'react';
import './Hero.css';

const Hero = ({ data }) => {
    return (
        <section className="hero" id="home">
            <h1 className="hero-headline">{data.headline}</h1>
            <p className="hero-subheadline">{data.subheadline}</p>
            <div className="hero-cta-group">
                <button className="btn-primary">{data.primaryCta}</button>
                <button className="btn-secondary">{data.secondaryCta}</button>
            </div>
        </section>
    );
};

export default Hero;
