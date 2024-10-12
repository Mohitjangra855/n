import React from 'react';

function Education() {
    return (
      <div className='row m-5 p-5 pt-4'>
      <div className='col-6 pl-3'>
          <img src="media/images/education.svg" style={{width:"75%"}}alt="education_image" />
      </div>
      <div className='col-6 p-5 mt-3'>
          <h3>Free and open market education</h3>
          <p className='mb-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" className=' fs-6 ' style={{ textDecoration: "none" }}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>       
          <p className='mb-3 text-muted pt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="" className=' fs-6' style={{ textDecoration: "none" }}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>       
      </div>

  </div>
      );
}

export default Education;