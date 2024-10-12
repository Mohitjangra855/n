import React from 'react';
function Pricing() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <h1>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" className=' fs-6' style={{ textDecoration: "none" }}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>                </div>
                <div className='col-1'></div>
                <div className='col-5'>
                    <div className='row'>
                        <div className='col-6 border pt-3 pb-3' style={{ textAlign: "center" }}>
                            <h1>₹0</h1>
                            <p className='text-muted'>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 border pt-3 pb-3' style={{ textAlign: "center" }}>

                            <h1>₹20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Pricing;