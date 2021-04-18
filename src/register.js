import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

const Register = () => {
    return (
        <>
           <div className="africa">
              <h1 style={{color: 'white'}}><b>ONE AFRICA.</b></h1>
               <h1 style={{color: 'orangered'}}><b>ONE APP</b></h1>
               <button className='play'><FaPlayCircle /></button>
               <div>
               <button className='register'>Register as a merchant</button>
               </div>
            </div> 
        </>
    )
}

export default Register
