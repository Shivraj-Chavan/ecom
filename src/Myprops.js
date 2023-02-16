import React, { useEffect, useState } from 'react'

export default function Myprops() {
  let[data,setdata]=useState([]);
  let[filter,setfilter]=useState("");
  //let com=true;
  
  useEffect(()=>{
    let getapi=async()=>{
       let response=await fetch(`https://shivraj-chavan.github.io/api/electronics${filter}.json`)
      // let response=await fetch(`https://fakestoreapi.com/products/`)
       let apidata=await response.json()
    //   if(com){
      setdata(apidata)
     // setfilter(await response.json())
    //   }
    //   return()=>{ com=false
    //   }
      }
    getapi()
    
  })
  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setfilter(updatedList);
  }


  
  let scrol=()=>{document.querySelector("body").scrollIntoView({behavior:"smooth"})}
  return (
    <div>
      <div className='nav'>
      <button onClick={()=>{setfilter("");scrol()}}>All</button>
      <button onClick={()=>{setfilter("/mobile");scrol()}}>MObile</button>
      <button onClick={()=>{setfilter("/laptop");scrol()}}>laptop</button>
      <button onClick={()=>{setfilter("/watch");scrol()}}>watch</button>
      <button onClick={()=>{setfilter("/tv");scrol()}}>tv</button>
      <button onClick={()=>{setfilter("/airdopes");scrol()}}>airdopes</button>
    
    
    
      <button onClick={() => filterProduct("men's clothing")}>data filter</button>
      <button onClick={() => filterProduct("jewelery")}>jewelery</button>
      </div>
      {
        data.map((d,e)=>{
          return(
            <div className='outer'id={e} key={e}>
             <div>
             <img className='main_img' src={d.thumbnail} alt={d.title} />
              <div className="flex">
                <img src={d.images[1]} alt={d.images[1]} />
                <img src={d.images[2]} alt={d.images[2]} />
                <img src={d.images[3]} alt={d.images[3]} />
                <img src={d.images[4]} alt={d.images[4]} />
              </div>
             </div>
              <div>
              <h1>{d.title}</h1>
            <h3>{d.heading}</h3>
            <ul>
              <li>{d.description[0]}</li>
              <li>{d.description[1]}</li>
              <li>{d.description[2]}</li>
            </ul>
            <button>₹ {d.price}</button>
              </div>
            </div>

          );
        })
      }
    </div>
  )
}
