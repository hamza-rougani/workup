import { useEffect } from 'preact/hooks'
import React from 'react'
import ReactGa from 'react-ga'

function SingleProduct() {
    useEffect(()=>{
ReactGa.pageview(window.location.pathname)
    },[])
  return (
    <div>
  welcome to single product
    </div>

  )
}

export default SingleProduct