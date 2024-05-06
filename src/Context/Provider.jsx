import React, { useContext, useState } from 'react'
import CreateContext from './CreateContext'

export const ContextProvider = (props)=>{
    const [notification,_setnotification] = useState(null)
    const [addtocart,_setaddtocart] = useState(null)
    const [listproductsCart,_setlistproductsCart] = useState(localStorage.getItem('listproductsCart'))
    const [token,_setToken] = useState(localStorage.getItem('TOKEN'));

    const  setToken=(token)=>{
        _setToken(token)
        if(token){
            localStorage.setItem('TOKEN',token)
        }else{
            localStorage.removeItem('TOKEN')
        }
    }
    const  setaddtocart=(product)=>{
        _setaddtocart(product)
    }
    
    const  setlistproductsCart=(product)=>{
        _setlistproductsCart(product)
        if(product){
            localStorage.setItem('listproductsCart',product)
        }else{
            localStorage.removeItem('listproductsCart')
        }
    }

    const setnotification = (message)=>{
        _setnotification(message);
        setTimeout(()=>{
            _setnotification(null);
        },4000)
    }
return(
    <CreateContext.Provider value={{
     notification,
     token,
     addtocart,
     listproductsCart,
     setToken,
     setnotification,
     setaddtocart,
     setlistproductsCart,
    }
    }>
        {props.children}
    </CreateContext.Provider>
)
}

export const useStateContext = ()=> useContext(CreateContext);