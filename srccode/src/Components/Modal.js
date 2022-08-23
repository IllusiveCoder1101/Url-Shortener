import React from 'react'
import { useGlobalContext } from '../Context/flow'

function Modal() {
  const {width}=useGlobalContext()
  return (
    <div className={(width<1080)?"box":"box1 box"}>
        <h2 className='heading2'>Boost your links today</h2>
        <button className='button2'>Get Started</button>
    </div>
  )
}

export default Modal