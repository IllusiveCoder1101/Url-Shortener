import React, { useContext, useState,useEffect } from 'react'

const AppContext= React.createContext()

function AppProvider({children}) {
  const [width,setWidth]=useState(window.innerWidth);
  
  const [Url,setUrl]=useState("");
  const [shrt,setShrt]=useState([])
  const [valid,setValid]=useState(false)
  const [original,setOriginal]=useState("");
  const [nwLink,setNewLink]=useState("")
  const ChangeUrl=(value)=>{
    const tmp=value;
    return tmp;
  }
  const resize=()=>{
    setWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener("resize",resize);
    return ()=>{
      window.removeEventListener("resize",resize);
    }
  })

  const fet=async(url)=>{
    const dat=await  fetch(` https://api.shrtco.de/v2/shorten?url=${url}`)
    const data=await dat.json()
    display(data);
    
  }
 
  
  const getUrl=()=>{
    return Url;
  }
  const display=(value)=>{
    setShrt(value);
    localStorage.setItem("original",value.result.original_link);
    localStorage.setItem("nwLink",value.result.short_link);
    setOriginal(value.result.original_link);
    setNewLink(value.result.short_link);
    
  }

  const showshrt=()=>{
    console.log(shrt);
  }
  return(
    <AppContext.Provider value={{Url,setUrl,width,ChangeUrl,getUrl,fet,shrt,showshrt,valid,setValid,original,nwLink}}>
    {children}
  </AppContext.Provider>
  )
}
export const useGlobalContext=()=>{
  return useContext(AppContext);
}

export {AppContext,AppProvider}