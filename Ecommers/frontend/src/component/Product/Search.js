import React, { useState } from 'react'
import './search.css'
import Meta from '../layout/Metadata/Meta'
import {useNavigate} from 'react-router-dom'


const Search = () => {
  const navigate = useNavigate();
    const [keyword,setkeyword] = useState("");
    let searchHandler =(e)=>{
        e.preventDefault();
        if(keyword){
           navigate(`/products/${keyword}`)
        }
        else{
            navigate('/products')
        }
    };
  return (
    <div>
      <Meta title={"Search ---jilani(app)"} />
      <form className='formsearch' onSubmit={searchHandler}>
        <input type="text" placeholder='Search products here' onChange={(e)=>setkeyword(e.target.value)}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}

export default Search
