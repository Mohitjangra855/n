import React from 'react';
function Stats() {
   return (
      <div className='container p-3'>
         <div className='row p-5'>
            <div className='col-6 p-5'>
               <h2>Trust with confidence</h2>
               <h4 className='mt-5 fs-5  '>Customer-first always </h4>
               <p className='text-muted'> That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>


               <h4 className='fs-5'>No spam or gimmicks </h4>
               <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>


               <h4 className='fs-5'>The Zerodha universe </h4>
               <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs..</p>


               <h4 className='fs-5'>Do better with money </h4>
               <p className='text-muted'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
               <img src="media\images\ecosystem.png" alt="ecosystem_image" style={{ width: "95%" }} />
               <div className='text-center'>
                  <a href="" className='mx-5 fs-6' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                  <a href="" className='mx-5 fs-6' style={{textDecoration:"none"}}>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
               </div>
            </div>
         </div>

      </div>
   );
}
export default Stats;
