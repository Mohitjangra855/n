import React from 'react';
function Hero() {
    return (
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src="media/images/homeHero.png" alt="home_image" className='mb-5' />


                <h1 className='mt-5'>Invest in everything </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button class="btn btn-primary p-2 fs-5" style={{ width: "30%", margin: "0 auto" }}>Sign Up</button>
            </div>

        </div>

    );
}

export default Hero;