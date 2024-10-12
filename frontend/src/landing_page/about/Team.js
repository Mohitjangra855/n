import React from 'react';
function Team() {
    return (
        <div className='row mb-5'>
            <div className='col-2'></div>
            <div className='col-4 pl-5 text-center'>
                <img src="media\images\nithinKamath.jpg" alt="nithinkamth" style={{ borderRadius: "100%" }} />
                <div className='pt-3 text-muted'> <h5>Nithin Kamath</h5>
                    <h6 className='pt-3 '>Founder, CEO</h6></div>
            </div>
            <div className='col-4 '>
                <h3 className='pb-5 text-muted'>People</h3>
                <p >Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>

                <p>Connect on <a href='#' style={{ textDecoration: "none" }}>Homepage</a> / <a href='#' style={{ textDecoration: "none" }}>TradingQnA</a> / <a href='#' style={{ textDecoration: "none" }}>Twitter</a></p>
            </div>
            <div className='col-2'></div>
            <div className='row text-center mb-3 mt-5 text-muted'>

                <div className='col '>
                    <img src="media\images\Nikhil.jpg" alt="Nikhil kamath" style={{ borderRadius: "100%", width:"60%"}} />
                    <div className='pt-3 text-mu0ted'> <h5>Nikhil Kamath
                    </h5>
                        <h6 className='pt-3 '>Co-founder & CFO</h6></div>
                        
                </div>
                
                <div className='col'>
                    <img src="media\images\Kailash.jpg" alt="Kailash" style={{ borderRadius: "100%",width:"60%" }} />
                    <div className='pt-3 text-muted'> <h5>Dr. Kailash Nadh
                    </h5>
                        <h6 className='pt-3 '>CTO</h6></div>
                </div>
                <div className='col'>
                    <img src="media\images\Venu.jpg" alt=" Venu" style={{ borderRadius: "100%" ,width:"60%"}} />
                    <div className='pt-3 text-muted'> <h5>Venu Madhav
                    </h5>
                        <h6 className='pt-3 '>COO</h6></div>
                </div>

            </div>
            <div className='row text-center mt-3 mb-5'>
                <div className='col'>
                    <img src="media\images\Hanan.jpg" alt="Hanan" style={{ borderRadius: "100%" ,width:"60%"}} />
                    <div className='pt-3 text-muted'> <h5>Hanan Delvi
                    </h5>
                        <h6 className='pt-3 '>CCO</h6></div></div>


                <div className='col'>  <img src="media\images\Seema.jpg" alt="Seema" style={{ borderRadius: "100%" ,width:"60%"}} />
                    <div className='pt-3 text-muted'> <h5>Seema Patil

</h5>
                        <h6 className='pt-3 '>Director
                        </h6></div>
                </div>
                <div className='col'> <img src="media\images\Karthik.jpg" alt="Karthik" style={{ borderRadius: "100%", width: "450px" ,width:"60%" }} />
                    <div className='pt-3 text-muted'> <h5>Karthik Rangappa
                    </h5>
                        <h6 className='pt-3 '>Chief of Education</h6></div>
                </div>


            </div>

            <div className='row text-center mt-3 mb-5'>


                <div className='col-4'> <img src="media\images\Austin.jpg" alt="Austin" style={{ borderRadius: "100%" ,width:"60%"}} />
                    <div className='pt-3 text-muted'> <h5>Austin Prakesh
                    </h5>
                        <h6 className='pt-3 '>Director Strategy</h6></div>
                </div>

                
            </div>
        </div>


    );
}

export default Team;