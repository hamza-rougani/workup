import React from 'react'

function SinglePr(ev) {
    let data = ev.data
  return (
    <tr>
                    <td>{data.ID}</td>
                    <td><div id='small_image'><img src={data.Image} alt="" /></div></td>
                    <td>{data.Title}</td>
                    <td>{data.Price} DH</td>
                    <td id='instock'>{data.Status}</td>
                    <td>{data.Qte}</td>
                    <td>{data.SKU}</td>
                    <td id='action'>
                        <div className='ac'>
                        <button id='edit'><i class='bx bx-edit-alt' ></i></button>
                        <button id='delete'><i class='bx bx-x'></i></button>
                        </div>
                    </td>
                    </tr>
  )
}

export default SinglePr