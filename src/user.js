import React from 'react'
import guide from './guide'

const user = () => {
    return (
        <div className='container'>
            <h2 className='user-title'>USER'S GUIDE</h2>
            <div className="underline"></div>
            {guide.map((users) => {
                const {id, title, content, download} = users;
                return (
                    <div className='user-box' key={id}>
                        <h5>{title}</h5>
                        <p>{content}</p>
                        <button>{download}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default user
