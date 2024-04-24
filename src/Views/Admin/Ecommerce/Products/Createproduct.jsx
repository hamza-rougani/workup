import { useEffect, useRef, useState } from 'preact/hooks'
import Upload from './Upload';
import CustomCss from './CustomCss';
import Status from './Status';
import Form from './Form';
import EditElement from './EditElement';
import EditImage from './EditImage';
import Editform from './EditForm';
import Features from './Features';
import SEO from './SEO';
import axios from 'axios';


function Createproduct() {
    const [displayedit,setdisplayedit] = useState(false)
    const [isVisible, setIsVisible] = useState(false);
    const [custom, setCustom] = useState({display:false});
    const [items,setItems] = useState([])
    const [checkelement,setcheckelement] = useState({type:'f',index:''})
    const [Categorie,setCategorie] = useState('Vitamin') 
    const [Tags,setTags] = useState([]) 
    const [Status,setStatus] = useState('Published') 
    const [Image,setImage] = useState('') 
    const [InfoPrd,setInfoPrd] = useState({title:'',quantity:'',price:''}) 
    const [SEOs,setSEO] = useState({title:'',description:'',image:'',index:''})
    const [Product,setProduct] = useState([]) 

    const [DefaultForm,setDefaultform] =useState({
      element:'form',
      container: {padding:"8px 10px",boxSizing: "border-box",width:"80%"},
      form: {display:'flex',flexDirection:'column',gap:'20px',width:"100%"},
      input: {background:'#ffffff',color:'#000000',borderRadius:'0px',padding:"10px 10px",boxSizing: "border-box",outline: "none",border: "1px solid #413f3f5a",width:"100%"},
      button:{color:'#fff',background:"#ba1313",padding:"14px 10px",boxSizing:"border-box",width:'100%',borderRadius:'30px',border:"none",cursor:"pointer",animation:"btnform 0.8s linear infinite",margin:'20px 0px'},
      h:{padding:'10px 0px',margin:'0px'},
      placeholder:['Type the full name','Type the number phone','Type the full adress'],
      image:'Images/headform.png',
      options : ['1 piece 199 dh','2 piece 349 dh']
})

    const [stylevalue,setStyle] = useState({padding:'14px 20px',width:'300px',fontSize:'0.8rem',background:'#0f83dc',color:'#fff',border:'none',borderRadius:'40px',cursor:'pointer',position:'relative',animation:'btn 1s linear infinite'})
    //styles button
    const [stylesbuttons,setstylebtn] =useState([
      {padding:'8px 13px',fontSize:'0.8rem',background:'#02923a',color:'#fff',border:'none',borderRadius:'20px',cursor:'pointer'},
      {padding:'8px 13px',fontSize:'0.8rem',background:'#c40c6b',color:'#fff',border:'none',borderRadius:'10px',cursor:'pointer',animation:'btn 0.6s linear infinite'},
      {padding:'8px 13px',fontSize:'0.8rem',background:'none',color:'#000',border:'1px solid #3736366b',borderRadius:'0px',cursor:'pointer',animation:'btn 0.6s linear infinite'}


    ])  
    // JSON.stringify(e.style, null, 2)
    const blockRef = useRef(null);
    useEffect(()=>{
        document.addEventListener('click', handleClickOutside)
    })
   const handleClickOutside = (event) => {
    const add = document.querySelector('.add')
      if (blockRef.current && !blockRef.current.contains(event.target) && event.target.className!='addbutton' && event.target.className!='bx bx-plus') {
        setIsVisible(false);
        add.classList.remove('clickadd')    
      }
      
    }
    const handelclickadd = ()=>{
        const add = document.querySelector('.add')
        add.classList.toggle('clickadd')
        setIsVisible(!isVisible)
    }
    const addElement = (ev)=>{
      switch (ev){
       case 'image' :
        return setItems([...items,{element:'image',image:'',style:{width:'80%',borderRadius:"0px",overflow:'hidden'}}])
       case 'button':
            setItems([...items,{element:'button',value:'Button',style:{padding:'14px 20px',width:'300px',fontSize:'0.8rem',background:'#0f83dc',color:'#ffffff',border:'none',borderRadius:'40px',cursor:'pointer',position:'relative',animation:'btn 1s linear infinite'},content:'',sumicontent:''}])
           
          return 0
       case 'form':
            setItems([...items,DefaultForm])
          return 0
        
      }
    }
    const handelAddvalue = (v) => {
      console.log(v)
        setItems((el) => {
          const newItems = [...el]
          newItems[v.index].image = v.image
          return newItems
        })
      }



    const Sendproduct = ()=>{
      setProduct(
        {
          title:InfoPrd.title,
          quantity:InfoPrd.quantity,
          price:InfoPrd.price,
          items:items,
          tags:Tags,
          image:Image,
          categorie:Categorie,
          SEO:SEOs,
          Status:Status,
        }
      )
   axios.post(`${import.meta.env.VITE_BACKEND_URL}/product`,Product)
   .then(({data})=>console.log(data))
   .catch(err=>console.log(err))
    }
  return (
    <div className='Createproduct'>
        <div className='Destination'>
            <span>DASHBOARD</span>
            <span>/</span>
            <span id='section'>ECOMMERCE</span>
            <span>/</span>
            <span id='section'>PRODUCTS</span>
            <span>/</span>
            <span id='section'>NEW PRODUCT</span>
        </div>
        <button onClick={()=>Sendproduct()}>Add product</button>
        <div className='grid_two'>
<div className='overinfo'>
    <h2>Content</h2>
           <div className='Info sect'>
             <div className='sec'>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>Name</span>
                    <span id='ob'>*</span>
                    </div>
                    <input onChange={(e)=>setInfoPrd({...InfoPrd,title:e.target.value})} placeholder='Name' id='att' type="text" />
                </div>
                
             </div>
             <div className='sec'>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>Price</span>
                    <span id='ob'>*</span>
                    </div>
                    <input onChange={(e)=>setInfoPrd({...InfoPrd,price:e.target.value})} placeholder='Price' id='att' type="number" />
                </div>
                
             </div>
             <div className='sec'>
                <div className='title'>
                    <div className='head'>
                    <span id='name'>Quantity</span>
                    <span id='ob'>*</span>
                    </div>
                    <input onChange={(e)=>setInfoPrd({...InfoPrd,quantity:e.target.value})} placeholder='Quantity' id='att' type="number" />
                </div>
                
             </div>
           </div>
           <h2>Product page</h2>
           <div className='Description'>
            <div className='elements'>
                {/* display element */}
          {items.map((e,index)=> {
            switch (e.element){
            case 'image':
                return e.image!='' ? <div className='imageUp' style={e.style}><img id='img' onClick={()=>setcheckelement({type:'image',index:index})} src={URL.createObjectURL(e.image)} alt="" /></div> : <Upload index={index} handelAddvalue={handelAddvalue}/>
            case 'button':
                return  <div className='btnc'><button onClick={()=>setcheckelement({type:'button',index:index})} className='btndesc' style={e.style}><span>{e.content && e.content.length>0 ? e.content : 'Type content'}</span><span id='finger'> <img id='img' src="/Icons/right.png" alt="" />{e.sumicontent && e.sumicontent ? e.sumicontent : 'Get it now by clicking here' }<img id='img' src="/Icons/left.png" alt="" /></span></button></div>
            case 'form':
                return <><button onClick={()=>setcheckelement({type:'form',index:index})}>edit</button><Form items={items[index]}/></> 
            }
          })}
         
            </div>
            {/* {custom.display ? <CustomCss handelCustom={handelCustom} custom={custom}  setCustom={setCustom}/> 
            
            : ''} */}
           
            <div className='add'>
            <button  onClick={handelclickadd} className='addbutton' id='add_property'><i class='bx bx-plus'></i></button>
            <div className='property' ref={blockRef}>
                <button className='selectname btn1' onClick={()=>addElement('image')}><i class='bx bx-image-alt' ></i> <div className='placeholdername'>Image</div></button>
                <button className='selectname btn2' onClick={()=>addElement('button')}><i class='bx bx-joystick-button' ></i>  <div className='placeholdername'>Button</div></button>
                <button className='selectname btn3' onClick={()=>addElement('form')}><i class='bx bx-data'></i> <div className='placeholdername'>Form</div></button>
              
            </div>
           </div>
           
           </div>
           <h2>Search Engine Optimize (SEO)</h2>
           <SEO setSEO={setSEO} SEOs={SEOs}/>
           </div>
           <div className='featured'>
            {/* {displayedit?<EditElement/>:''} */}
            {typeof(checkelement.index)=='number' && checkelement.type=='button'? <EditElement setcheckelement={setcheckelement} index={checkelement.index} items={items} setItems={setItems}/>: ''}
            { typeof(checkelement.index)=='number' && checkelement.type=='image'? <EditImage setcheckelement={setcheckelement} index={checkelement.index} items={items} setItems={setItems}/>: ''}
            {typeof(checkelement.index)=='number' && checkelement.type=='form'? <Editform setcheckelement={setcheckelement} index={checkelement.index} items={items[checkelement.index]} items1={items} setItems={setItems}/>: ''}
             
             {checkelement.type=="f" &&  <Features setCategorie={setCategorie} setStatus={setStatus} setTags={setTags} setImage={setImage}/>}  
           </div>
        </div>
    </div>
  )
}

export default Createproduct