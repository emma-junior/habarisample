import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
    const {openSidebar} = useGlobalContext()
    return (
        <header className='top'>
            <div className='head'>               
                <button className='sidebar-toggle' onClick={openSidebar}>
                     <FaBars /> 
                </button>
                <div>   
                     <img className='logo' src="https://habari-static-assets.s3.amazonaws.com/merchant_home/img/logo.png" alt="" / >  
                </div> 
            </div>
        </header>
    )
}

export default Home
