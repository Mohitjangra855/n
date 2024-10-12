import React from 'react';

import Navbar from '../Navbar.js';
import Hero from './Hero.js';
import Pricing from './Pricing.js';
import Education from './Education.js';
import OpenAccount from '../OpenAccount.js';

import Footer from '../Footer.js';
import Awards from './Awards.js';
import Stats from './Stats.js';

function HomePage() {
    return (
        <>
          
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
    );
}


export default HomePage;