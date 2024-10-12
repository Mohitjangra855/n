import React from 'react';
function Hero() {
    return (
        <div>
            <div className='row text-center text-muted border-bottom ' style={{ margin: "30px 200px 20px 200px", padding: "100px" }}>
                <h1 style={{ fontSize: "50px" }}>Pricing</h1>
                <p style={{ fontSize: "25px" }} >Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
            <div className='row text-muted border-bottom' style={{ margin: "20px 200px", padding: "100px" }}>
                <div className='col text-center'>
                    <img src='media\images\pricing0.svg' />
                    <h2>Free equity delivery</h2>
                    <p style={{ fontSize: "18px" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col text-center'>
                    <img src='media\images\intradayTrades.svg' />
                    <h2>Intraday and F&O trades</h2>
                    <p style={{ fontSize: "18px" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

                </div>
                <div className='col text-center'>
                    <img src='media\images\pricing0.svg' />
                    <h2>Free direct MF</h2>
                    <p style={{ fontSize: "18px" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

                </div>

            </div>
        </div>
    );
}

export default Hero;