import React from 'react'
import Images from './images'

const Explore = () => {
    return (
        <section className='habari-pic'>
            <div className='explore'>
                <h2><b>EXPLORE HABARI</b></h2>
            </div>
            <div className='underline'></div>
            {Images.map((picture) => {
                const {id, image} = picture;
                return (
                    <div className='pictures' key={id}>
                        <img className='pic' src={image} alt=""/>
                    </div>
                )
            })}
        </section>
    )
}

export default Explore
