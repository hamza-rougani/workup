import { useEffect } from 'preact/hooks'
import { useLocation } from 'react-router-dom';
import React from 'react'
import ReactGa from 'react-ga';

function SingleProduct() {
    useEffect(() => {
        ReactGa.pageview(window.location.pathname + window.location.search);
      }, []);
  return (
    <div>
  welcome to single product
    </div>

  )
}

export default SingleProduct