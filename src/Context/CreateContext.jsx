import React,{createContext} from 'react'
const CreateContext = createContext({
    notification:null,
    token:null,
    addtocart:null,
    listproductsCart:null,
    setToken:()=>{},
    setnotification:()=>{},
    setaddtocart:()=>{},
    setlistproductsCart:()=>{},
})

export default CreateContext