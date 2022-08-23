import React from 'react'
import Content from './content'
function Description() {
  return (
    <div className='desc'>
        <div className="text">
          <h2 className='heading1'>Advanced Statistics</h2>
          <p className='about1'>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="points">
          {<Content header="Brand Recognition" para="Boost your brand recognition with each click. Generic links don't mean a thing.Branded links help instil confidence in your content" id={0}/>}
          <div className="break"></div>
          {<Content header="Detailed Records" para="Gain insights into who is clicking your links, knowing when and where people engage with your content helps inform better decisions." id={1}/>}
          <div className="break"></div>
          {<Content header="Fully Customizable" para="improve brand awareness and content discoverability through customizable links, supercharging audience engagement." id={2}/>}
        </div>
    </div>
  )
}

export default Description