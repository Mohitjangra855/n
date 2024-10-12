import React from 'react';
function Brokerage() {
    return (
        <div className='row' style={{ margin: "100px 200px 20px 200px", padding: "50px" }}>
            <div className='col-8 '>
                <a  className='text-center ' style={{textDecoration:"none"}} href=""><h4 className='mb-5' style={{fontWeight:"400"}}>Brokerage calculator</h4></a>
                <ul style={{fontSize:"0.9rem"}}>
                <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                <li>Digital contract notes will be sent via e-mail.</li>
                <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.
                </li>
                <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).
                </li>
                <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).
                </li>
                <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.
                </li>

            </ul>
            </div>
            <div className='col-4 text-center'>
            <a  style={{textDecoration:"none"}} href=""><h4 style={{fontWeight:"400"}}>List of charges</h4></a>
            
            </div>

        </div>
    );
}

export default Brokerage;