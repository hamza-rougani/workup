import { useEffect, useState } from 'preact/hooks'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import React from 'react'
import axios from 'axios';
import './style.css'
import Loadingsingleproduct from '../../Components/loading/Loadingsingle';
//config  your store
import storeInfo from '../../Admin/Store/ConfigStore';
const productAction = {
  fetchoneproduct:"api/products/fetch-product",
  fetchoptions:"api/products/fetch-product-options",
  sendorder:"api/create-cmd-from-stores"
}
function SingleProduct() {

    
const {slug} = useParams()
const navigate = useNavigate()
const [product,setProduct] = useState([])
const [loading,setLoading] = useState(true)
const [loadingopt,setLoadingopt] = useState(true)
const [options,setoptions] = useState(null)
const [errname,seterrname] = useState({status:false,message:''})
const [erraddress,seterraddress] = useState({status:false,message:''})
const [errphone,seterrphone] = useState({status:false,message:''})
const [optionvalue,setoptionvalue] = useState({qty:'',price:''})
const [neworder,setNewOrder] = useState({fullname:'',phone:'',address:'',qty:'',product_id:'',price:'',user_ip:'',product_slug:'',source:storeInfo.STORE_URL})
    useEffect(async () => {
      setLoading(true)
      setLoadingopt(true)
       axios.get(`${storeInfo.STORE_SOURCE}/${productAction.fetchoneproduct}/${slug}`)
      .then(({data})=>{
        setProduct(data)
       
        //  provide style to single product component
        const styleElement = document.createElement('style');
         styleElement.innerHTML = data.custom_css;
         document.head.appendChild(styleElement);
         //  provide link to single product component
         var bootstrapLink = document.createElement('link');
        bootstrapLink.rel = 'stylesheet';
        bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
        document.head.appendChild(bootstrapLink);
    // Clean up the added style element when the component unmounts
    setLoading(false)
    return () => {
      document.head.removeChild(styleElement);
      document.head.removeChild(bootstrapLink);
    };
    

      })
      .catch((err)=>{
      
        console.log(err)
      })
      axios.get(`${storeInfo.STORE_SOURCE}/${productAction.fetchoptions}/${slug}`)
      .then(({data})=>{
        setoptions(data)
        setoptionvalue({qty:data[0].qty,price:data[0].prix})
        setLoadingopt(false)
      }).catch(err=>{
        console.log(err)
      })
       
      const fetchIPAddress = async () => {
        try {
          const response = await fetch('https://api.ipify.org?format=json');
          const data = await response.json();
          setNewOrder({...neworder,user_ip:data.ip});
        } catch (error) {
          console.error('Error fetching IP address:', error);
        }
      };
  
      fetchIPAddress();
      }, []);

      const handelOrder = async () => {
        if(neworder.fullname.length==0 || neworder.fullname.trim() == ""){
         seterrname({...errname,status:true})
        }else{
          seterrname({...errname,status:false})
        }
        
        if(neworder.phone.length==0 || neworder.phone.length<10 || isNaN(neworder.phone) || neworder.phone.trim() == ""){
          seterrphone({...errphone,status:true})
        }else{
          seterrphone({...errphone,status:false})
        }
        // }else{
        //   if (!neworder.phone.includes('+212') && isNaN(neworder.phone)) {
        //     setphone(true)
        //   }else{
        //     setphone(false)
        //   }
        // }
        if(neworder.address.length==0 || neworder.address.trim() == ""){
          seterraddress({...erraddress,status:true})
        }else{
          seterraddress({...erraddress,status:false})
        }
        // if(neworder.phone.length>0){
        //   let str = neworder.phone.includes('+212')
        //   if (str) {
        //     return neworder.phone.length > 13 || typeof(neworder.phone)=='string' ? setField({...verifyField,phonemessage:'المرجو إدخال رقم الهاتف صحيح'}):null

        //   }else{
        //    return neworder.phone.length > 10 || typeof(neworder.phone)=='string' ? setField({...verifyField,phonemessage:'المرجو إدخال رقم الهاتف صحيح'}):null
        //   }
         
        // }
        if(neworder.fullname.length>0 && neworder.address.length>0 && neworder.phone.length>0){
          let data = await {
            fullname:neworder.fullname,
            phone:neworder.phone,
            address:neworder.address,
            qty:optionvalue.qty,
            price:optionvalue.price,
            product_id:product.id,
            user_ip:neworder.user_ip,
            product_slug:slug,
            source:'test source'
          }
           await axios.post(`${storeInfo.STORE_SOURCE}/${productAction.sendorder}`, data)
          .then(({data})=>{
            navigate('/thank_you');
          }).catch((err)=>{
            navigate('/error');
          })
          
          
        }
        
      };
      

      
  
  return (
    <div className='singlepage'>
      {!loading ? 

      <div class="container-fluid">
     <div class="row mb-4" style=" margin-top: 0rem!important; ">
                    <div class="col-md-3"></div>
                    <div class="col-md-6" style=" padding-right: 0px; padding-left: 0px;">

                       <div className='danger' dangerouslySetInnerHTML={{ __html: product.desc }} /> 
                    </div>
                </div>
                <section id='app' class="row mb-6" style=" margin-top: 0rem!important; ">
                <div class="col-md-3"></div>
                <div class="col-rgb col-md-6">
                <div class="row">
                                <div class="col-md-12 text-center mb-3 product-price">
                                    <div class="bg-green text-black p-1 mb-3 form_infos" style="background: #BE1622 !important;">
                                        <img src="https://cmds.team/img/Medias/59c06329-8ba0-4bec-b59f-40f90f63649f.png" style="width: 100%;" />
                                        <img src="https://cmds.team/img/Medias/f1b0c20f-99c2-424c-8b23-d7895ef26249.gif" />
                                        <img src="https://cmds.team/img/Medias/f1b0c20f-99c2-424c-8b23-d7895ef26249.gif" />
                                        <img src="https://cmds.team/img/Medias/f1b0c20f-99c2-424c-8b23-d7895ef26249.gif" />
                                    </div>
                                </div>
                            </div>
                            <div class="row col-md-12">
                            <div class="col-rgn">

               <div class="form-group mb-3" dir="rtl">
                        <input onChange={(e)=>setNewOrder({...neworder,fullname:e.target.value})}  v-model="cmd.fullname" type="text"  class={`form-control ${errname.status ? 'is-invalid' : ''}`}  placeholder="أكتب الإسم الكامل"/>
                        <div v-if={errname.status} class="invalid-feedback">
                      المرجوا إدخال الإسم الكامل صحيح
                      </div>
                     </div>

                      
    
                    
                         </div>
                            </div>
                            <div class="row col-md-12">
                            <div class="col-rgn">

               <div class="form-group mb-3" dir="rtl">
                        {/* <input onChange={(e)=>setNewOrder({...neworder,phone:e.target.value})} maxlength={neworder.phone.includes('+212')?13:10} minlength={neworder.phone.includes('+212')?13:10} v-model="cmd.fullname" type="text"  class="form-control"  placeholder=" أكتب رقم الهاتف"/> */}
                        <input onChange={(e)=>setNewOrder({...neworder,phone:e.target.value})} maxlength={10} type="text" v-model="cmd.phone" class={`form-control ${errphone.status ? 'is-invalid' : ''}`}   placeholder=" أكتب رقم الهاتف"/>
                        <div v-if={errphone.status} class="invalid-feedback">
                        المرجو إدخال رقم الهاتف صحيح
                      </div>
                     </div>
                     
                         </div>
                            </div>
                            <div class="row col-md-12">
                            <div class="col-rgn">
               <div class="form-group mb-3" dir="rtl">
                        <input onChange={(e)=>setNewOrder({...neworder,address:e.target.value})} v-model="cmd.address" type="text"  class={`form-control ${erraddress.status ? 'is-invalid' : ''}`} placeholder="أكتب عنوان المنزل و المدينة"/>
                        <div v-if={erraddress.status} class="invalid-feedback">
                        المرجو إدخال رقم الهاتف صحيح
                      </div>
                </div>
                
                         </div>
                         <div class="col-rgn">

      <div class="form-group mb-3" dir="rtl">
    
         {!loadingopt && options?
    <>
        <label for="address"><label>{product.qty_label}</label></label>

                <select onChange={(e)=>setoptionvalue({qty:e.target.value.split('_')[0],price:e.target.value.split('_')[1]})} v-model="cmd.qty" name="qty" class="form-control form-select">
                    {options.map((option,index)=><option value={`${option.qty}_${option.prix}`}>  {`${option.qty}ب ${parseInt(option.prix)}  درهم ${option.obs ?option.obs:''}`}</option>
                    )
                  }
                </select>
</>
    : 
        <div class="row g-3">
                <label>{product.qty_label}</label>
                <input onChange={(e)=>setoptionvalue({qty:e.target.value,price:e.target.value * product.price})} v-model="cmd.qty" type="number" class="form-control" name="qty" placeholder={`الكمية`}/>
        </div>
    }
</div>

                                  <div class="d-grid gap-2 col-12 mx-auto">
                                    <button onClick={()=>handelOrder()} type="button" class="pulse-buttonsend se" ><div className='send'>إرسال الطلب <i class="fa fa-paper-plane"></i></div></button>
                                </div>
                                  <div class="d-grid gap-2 col-12 mx-auto">
                                    <button  type="button" class="pulse-wtsp pulse-buttonsend " ><div className='send'> اطلب الآن عبر الواتساب <i class='bx bxl-whatsapp'></i></div></button>
                                </div>
</div>
                            </div>

                            
                            
                </div>
                </section>
                </div>          
                :<Loadingsingleproduct/>}
    </div>

  )
}

export default SingleProduct