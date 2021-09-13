import React from 'react'
const Contactdetails = ({ phone, email, website }) => {
    return (
        <>
            <div className='m-5'>
                <h5 className='mb-5'>Contact Us</h5>
                <div>
                    <h6>Phone</h6><h2>{phone}</h2>
                    <h6>Email</h6><h2>{email}</h2>
                    <h6>Website</h6><h2>{website}</h2>
                </div>
            </div>
        </>
    )
}

export default Contactdetails
