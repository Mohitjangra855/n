import React from 'react';
function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className='container mt-5'>
            <div className='row 'style={{display:"flex", justifyContent:"center"}}>
                <div className='col-6 p-5 mt-5 ' >
                <h1 style={{marginTop:"100px",}}>{productName}</h1>
                <p className='fs-5 text-muted' style={{paddingRight:"100px"}}>{productDescription}</p>
                <a href={learnMore} style={{textDecoration:"none"}}>{learnMore}</a>
                </div>
                <div className='col-6'><img src={imageURL} /></div>
            </div>
        </div>
    );
}

export default RightSection;
