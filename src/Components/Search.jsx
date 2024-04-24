import { useRef,useState } from 'preact/hooks'
import React from 'react'
import { Link } from 'react-router-dom'

function Search(ev) {

  return (
    <div className='SearchEn'>
        <ul>
          <Link to='/admin'>  <li id='ids'>Sony X900H 4K Ultra HD Smart LED ...</li></Link>
            <li id='ids'>Samsung Odyssey G7 32-Inch Curved ...</li>
            <li id='ids'>Hisense U8G Quantum Series 4K UL...</li>
            <li id='ids'>Sony X900H 4K Ultra HD Smart LED ...</li>
            <li id='ids'>Samsung Odyssey G7 32-Inch Curved ...</li>
            <li>Hisense U8G Quantum Series 4K UL...</li>
        </ul>
    </div>
  )
}

export default Search