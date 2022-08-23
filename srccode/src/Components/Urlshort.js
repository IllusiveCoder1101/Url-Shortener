
import React,{useState} from 'react'
import { useGlobalContext } from '../Context/flow'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Urlshort() {
  const {ChangeUrl,fet,setUrl,Url,width,setValid,original}=useGlobalContext()
  const [fieldTouched,setFieldTouched]=useState("")
  const [copied,setCopied]=useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    fet(Url);
    setValid(true);
    
  }
  return (
    <>
    <div className={(width<1080)?"mobile":"desktop"}>
       
       <input type="text" name="ShortenUrl" id="ShortenUrl" className={(fieldTouched==="shorten")?(Url)?"inputfield":"errorfield":"inputfield"} placeholder='Shorten a link here...'  onInput={(e)=>{setUrl(ChangeUrl(e.target.value));setValid(false)}} value={Url} />
        {(fieldTouched==="shorten")?<label className="Error" htmlFor="ShortenUrl" >{(Url )?"":"Enter a valid Url"}</label>:<></>}
       <button type="submit" className="button1" onClick={(e)=>{setFieldTouched("shorten");handleSubmit(e);setCopied(false)}}>Shorten it!</button>
       
   </div>
   {
     (localStorage.getItem("original") )?
     
     <div className='Urldisplay'>
       
       <p className='original'>{localStorage.getItem("original")}</p>
       <p className='newLink'>{localStorage.getItem("nwLink")}</p>
       {localStorage.setItem(original,original)}
       <CopyToClipboard text={localStorage.getItem("nwLink")} onCopy={()=>setCopied(true)} >
         <button className={(copied)?"copied":'copy '} >{(copied)?"Copied!":"Copy"}</button>
       </CopyToClipboard>
     </div>:<></>
   }
  
    </>
  )
}

export default Urlshort