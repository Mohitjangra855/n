import React from 'react';
function Universe() {
    return (
        <div>
            <div className='row text-center'>
                <h2>The Zerodha Universe
                </h2>
                <p className='mt-3 text-muted'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center ' style={{ marginLeft: "200px", marginRight: "200px", marginBottom: "80px", marginTop: "80px" }}>
                <div className='col-4 text-center'>
                    <img className='uniclass' src='media\images\smallcaseLogo.png' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Thematic investment platform</p>
                </div>
                <div className='col-4 text-center '>
                    <img className='uniclass' src='media\images\streakLogo.png' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Algo & strategy platform</p>
                </div>
                <div className='col-4 text-center                       '>
                    <img className='uniclass' src='media\images\sensibullLogo.svg' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Options trading platform</p>

                </div>

            </div>
            <div className='row text-center ' style={{ marginLeft: "200px", marginRight: "200px", marginBottom: "80px" }}>
                <div className='col-4 text-center'>
                    <img className='uniclass' src='media\images\zerodhaFundhouse.png' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Asset management</p>
                </div>
                <div className='col-4 text-center'>
                    <img className='uniclass' src='media\images\tijori.svg' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Fundamental research platform</p>
                </div>
                <div className='col-4 text-center '>
                    <img className='uniclass' src='media\images\dittoLogo.png' />
                    <p className='text-muted mt-2' style={{ fontSize: "13px" }}>Insurance</p>
                </div>


            </div>
            <div className='row ' style={{marginBottom:"100px"}}>
                <button class="btn btn-primary p-2 fs-5" style={{ width: "10%", margin: "0 auto" }}>Sign Up Now</button>
            </div>
        </div>
    );
}

export default Universe;