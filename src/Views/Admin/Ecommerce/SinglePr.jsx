import React from 'react'

function SinglePr(ev) {
    let data = ev.data
  return (
    <tr>
                    <td>{data.ID}</td>
                    <td><div id='small_image'><img id='img' src={data.Image} alt="" /></div></td>
                    <td>{data.Title}</td>
                    <td>{data.Price} DH</td>
                    <td id='instock'>{data.Status}</td>
                    <td>{data.Qte}</td>
                    <td>{data.SKU}</td>
                    <td id='action'>
                       <div className='ac'>
                       <button id='check'><i class='bx bx-check'></i></button>
                       <button><i class='bx bx-edit-alt' ></i></button>
                        </div>
                     </td>
                    <td id='action'>
                        <div className='ac'>
                        <button className='btn edit'><i class='bx bx-edit-alt' ></i></button>
                        <button className='btn delete'><i class='bx bx-x'></i></button>
                        </div>
                    </td>
                    </tr>
  )
}

export default SinglePr