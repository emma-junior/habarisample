import React from 'react'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext()
    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}>
            <div className="sidebar-main">
                <button className="close-btn" onClick={closeSidebar}><FaTimes /></button>
                    <div className="combine">
                        <ul className='links'>
                            <li className='link'><Link to='Explore-Habari'>Explore Habari</Link></li>
                            <li className='link'><Link to='FAQ'>FAQ</Link></li>
                            <li className='link'><Link to='Users-Guide'>User's Guide</Link></li>
                        </ul>
                        <div className='input'>
                            <input type="text" placeholder='User Name*' />
                            <h2 className='forget'><Link to='/'>Forgot Username?</Link></h2>
                        </div>
                        <div className='input'>
                            <input type="text" placeholder='Password*' />
                            <h2 className='forget'><Link to='/'>Forgot Password?</Link></h2>
                        </div>
                        <div className='bttn'>
                            <button type='button' className="btn">Login</button>
                            <button type='button' className="btn">SignUp</button>
                        </div>
                    </div>
            </div>
        </aside>
    )
}

export default Sidebar
