import React from 'react'

function Topvisitpage(ev) {
  return (
    <div className='Topvisitpage'>
        <div className='head_top'>
            <h2>{ev.value.title}</h2>
            <select name="" id="">
                <option value="">Today</option>
                <option value="">Yesterday</option>
            </select>
        </div>
        <table>
            <thead>
                <td>#</td>
                <td>url</td>
                <td>views</td>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>238</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lorem ipsum dolor sit amet consectetur.</td>
                    <td>238</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Topvisitpage