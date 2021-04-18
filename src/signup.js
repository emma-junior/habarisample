import React from 'react'

const Signup = () => {
    return (
        <>
            <div className='sign-up'>
                <h2 className='signup-header'>SIGN UP</h2>
                <div className="underline"></div>
                <div className='sign-input'>
                    <p className='create'>Create your account</p>
                    <input className='sign' type="text" placeholder='First Name*' />
                    <input className='sign' type="text" placeholder='Last Name*' />
                    <input className='sign' type="text" placeholder='User Name*' />
                    <input className='sign' type="text" placeholder='Telophone' />
                    <input className='sign' type="text" placeholder='Email' />
                    <input className='sign' type="text" placeholder='Birth Date*' />
                    <div className='gender-sign'>
                        <div className='male-female'>
                            <p className='gender'>Gender*</p>
                            <button className='male'>Male</button>
                            <button className='female'>Female</button>
                        </div>
                        <input className='sign' type="text" placeholder='Password' />
                    </div>
                </div>
                <button className='btn'>Sign Up</button>
            </div>    
        </>
    )
}

export default Signup
