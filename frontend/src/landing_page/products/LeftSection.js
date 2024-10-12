import React from 'react';
function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container' style={{marginTop:"100px"}}>
            <div className='row'>
                <div className='col'>
                    <img src={imageURL} />
                </div>
                <div className='col'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                   <div className='mb-3'>
                   <a style={{marginRight:"20px"}} href={tryDemo}>try Demo </a>
                   <a style={{marginLeft:"70px"}} href={learnMore}>Learn more </a>
                   </div>
                  <div>
                  <a style={{marginRight:"20px"}} href={appStore}><img src="\media\images\appstoreBadge.svg" /></a>
                  <a style={{marginLeft:"10px"}} href={googlePlay}><img src="\media\images\googlePlayBadge.svg" /> </a>
                  </div>
                </div>
            </div>
        </div>


    );
}

export default LeftSection;