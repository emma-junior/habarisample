import React from 'react'
import QandA from './QandA'
import { useGlobalContext } from './context'

const Faq = () => {
 const {isAnswer, setIsAnswer} = useGlobalContext()
    return (
        <>
          <div>
            <h2 className='faq'>FAQ</h2>
            <div className="underline"></div>
          </div>
          
            {QandA.map((questions) => {
                const {id, icon, icon1, question, answer} = questions;
                console.log(id)
                return(
                    <div className='contain' key={id}>
                      <div className='que-btn'>                      
                        <h6 className='que'><b>{question}</b></h6><button className='icon' onClick={() => setIsAnswer(!isAnswer)}>{isAnswer ? icon1 : icon}</button>
                      </div>
                      {isAnswer  && (<p>{answer}</p>)}
                    </div>
                )
            })}
            
        </>
    )
}

export default Faq
