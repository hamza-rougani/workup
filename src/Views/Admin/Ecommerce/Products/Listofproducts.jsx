import React from 'react'
import SinglePr from '../SinglePr'
const products = [
  {ID:1,Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6IQ4joM2aIb6weVHMjW5bg9013wqFVIBzKwhnSM6ng&s',Title:'Swatch',Price:249,Status:'In stock',Qte:30,SKU:'IC-163-A0'},
  {ID:2,Image:'https://e7.pngegg.com/pngimages/556/869/png-clipart-men-s-jeans-product-kind-png-material.png',Title:'Men jeans',Price:199,Status:'In stock',Qte:100,SKU:'IC-167-A0'},
  {ID:3,Image:'https://www.barbour.com/media/catalog/product/cache/a6a41b11f44356383d9979e3b517c3aa/m/w/mwx0017be51_aw23_front.jpg',Title:'Jacket',Price:235,Status:'In stock',Qte:30,SKU:'IC-163-A0'},
  {ID:4,Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6IQ4joM2aIb6weVHMjW5bg9013wqFVIBzKwhnSM6ng&s',Title:'Swatch',Price:249,Status:'In stock',Qte:30,SKU:'IC-163-A0'},
  {ID:5,Image:'https://e7.pngegg.com/pngimages/556/869/png-clipart-men-s-jeans-product-kind-png-material.png',Title:'Men jeans',Price:199,Status:'In stock',Qte:100,SKU:'IC-167-A0'},
  {ID:6,Image:'https://www.barbour.com/media/catalog/product/cache/a6a41b11f44356383d9979e3b517c3aa/m/w/mwx0017be51_aw23_front.jpg',Title:'Jacket',Price:235,Status:'In stock',Qte:30,SKU:'IC-163-A0'},
  
]
function Listofproducts() {
  return (
    <div className='listofproduct'>
        <table>
                <thead>
                    <td>ID</td>
                    <td>Image</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Stock</td>
                    <td>Quantity</td>
                    <td>SKU</td>
                    <td className='lang'>
                    <div className='iconlarge'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/france.png`} alt="" /></div>
                    <div className='iconlarge'><img id='img' src={`${import.meta.env.VITE_BASE_URL}/Icons/arabic.png`} alt="" /></div>
                    </td>
                    <td>Action</td>
                </thead>
                
                <tbody>
                 {products.map((p,index)=><SinglePr data={p} key={index}/>)}   
                   
                </tbody>
            </table>
    </div>
  )
}

export default Listofproducts