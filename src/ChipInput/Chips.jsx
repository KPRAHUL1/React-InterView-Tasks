import React, { useState } from 'react'
import './Chips.css'
const Chips = () => {
  const [chips , setChips] = useState([]);
  const [input , setInput]= useState("");
  const handleKeyDown =(e)=>{
  if (e.key === 'Enter' && input.trim() !=='') {
     setChips((prevValue)=>[...prevValue,input]);
     setInput('')
  } 
  }
  const handleDelete = (indexValue)=>{
   setChips(prevItem=>(prevItem.filter((_,index)=>index!==indexValue)))
  }
  return (
    <>
     <div style={{display:"flex", flexDirection:"column",alignItems:"center", margin:"40px 0"}}>
      <h2>Chips Input</h2>
      <input
        type="text" 
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={(e)=>setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        value={input}
      />
      {chips.map((chip,index)=>(
        <>
        <div key={index} className='flex items-center gap-2 bg-gray-200 p-2 rounded-full m-2'>
          <span key={index}>{chip}</span>
          <button onClick={()=>handleDelete(index)}>X</button>
        </div>
        </>
    ))}
    </div>
    </>
  )
}

export default Chips