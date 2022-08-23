import React from 'react'
import logo from './logo3'
function Content({header,para,id}) {
  return (
    <div className="card">
        <div className="logo">
          {logo(id)}
        </div>
        <h3 className='heading1'>{header}</h3>
        <p className='about3'>{para}</p>
            
    </div>
  )
}

export default Content