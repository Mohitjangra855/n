import React from 'react';
function Awards() {
    return (
        <div className='row mt-5 p-5'>
            <div className='col-6 pl-3'>
                <img src="media/images/largestBroker.svg" alt="award_image" />
            </div>
            <div className='col-6 p-5 mt-3'>
                <h2>Largest stock broker in India</h2>
                <p className='mb-5'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6'>
                        <ul>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ul>
                    </div>
                    <img src="media/images/pressLogos.png" style={{ width: "90%" }} alt="media_images"/>
                </div>
            </div>

        </div>
    );
}

export default Awards;