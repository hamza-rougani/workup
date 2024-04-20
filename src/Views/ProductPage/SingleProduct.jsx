import { useEffect } from 'preact/hooks'
import { useLocation } from 'react-router-dom';
import React from 'react'
import ReactGA from 'react-ga'

function SingleProduct() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <div>
  welcome to single product
    </div>

  )
}

export default SingleProduct