import React from 'react';
function Hero() {
    return (
        <section id="supportHero">
            <div id="supportWrapper">
                <h3 style={{ marginTop: "80px ", marginBottom: "50px" }}>Support Portal</h3>
                <a href='' style={{ marginTop: "80px ", marginBottom: "50px" }}>Track tickets</a>
            </div>
            <div className='row' style={{ margin: "0px 150px", paddingBottom: "100px" }}>
                <div className='col'>
                    <h3 className='mb-4'>Search for an answer or browse help topics to create a ticket</h3>
                    <input style={{ width: "100%", border: "none", borderRadius: "5px", padding: "10px 100px", marginBottom: "18px" }} placeholder='Eg:how so i activate F&0 ,why is my order getting rejected' />
                    <a href="" style={{ fontSize: "20px" }}>Track account opening       </a>
                    <a href="" style={{ fontSize: "20px" }}>Track segment activation</a>
                    <a href="" style={{ fontSize: "20px" }}>Intraday margins </a><br />
                    <a href="" style={{ fontSize: "20px" }}>Kite user manual</a>
                </div>
                <div className='col'>
                    <h3 className=' mt-3' style={{ marginLeft: "50px" }}>Featured</h3>
                    <ol>
                        <li style={{ marginLeft: '50px', fontSize: "20px" }}><a href="">Connectivity issue - Support telephone line [Resolved]</a>
                        </li>
                        <li style={{ marginLeft: '50px', fontSize: "20px" }}>
                            <a href="">
                                Current Takeovers and Delisting - July 2024</a>
                        </li>
                    </ol>
                </div>

            </div>
        </section>
    );
}

export default Hero;