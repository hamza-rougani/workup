import { useRef,useState } from 'preact/hooks'
import React from 'react'
import { Link } from 'react-router-dom'
import CardSearchProduct from './CardSearchProduct'

function Search(ev) {

  return (
    <div className='SearchEn'>
        <ul>
          <li><CardSearchProduct/></li>
          <li><CardSearchProduct/></li>
          <li><CardSearchProduct/></li>
          <li><CardSearchProduct/></li>
          <li><CardSearchProduct/></li>
        </ul>
    </div>
  )
}

export default Search