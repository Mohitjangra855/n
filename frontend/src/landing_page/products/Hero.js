import React from 'react';
function Hero() {
    return (
        <div className='container mt-5  '>
            <div className='row text-center border-bottom '>
                <h1 style={{color:"#424242"}}>Technology</h1>
                <p className='fs-3 mt-4 mb-4 text-muted'>Sleek, modern, and intuitive trading platforms
                </p>
                <p className='fs-5 text-muted 'style={{marginBottom:"120px"}}>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;