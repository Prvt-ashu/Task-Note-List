//import React from 'react'
//import { list } from "postcss";
import { useState } from "react";

function App (){

  let [ taskname , setTaskname] = useState ([])


  let savetask =(p)=>{

    let tasknameinput = p.target.tasknameinput.value;
    if(!taskname.includes(tasknameinput)){

      let finaltask = [...taskname , tasknameinput]
      setTaskname(finaltask)
    }
    else{ 

      alert("Task is Already Exist.")

    }
  
    p.preventDefault();
    
  }


  let tasklist = taskname.map ((value , index)=>{
    return(
     <Tasknamelist key = {index} value = {value} indexNum={index} 
     taskname={ taskname }  setTaskname={setTaskname}
     />
    )
 })



  return (
    <div>
      <h1 className=' flex justify-center  text-5xl font-bold text-black mt-5 mb-5'> To Do List </h1>
      <form className=' flex  gap-5 ml-5 py-4 px-4  w-11/12' onSubmit={ savetask }>
        <input type='Text' placeholder="Enter Your Task."  name="tasknameinput" className=' text-black  basis-3/4  rounded border-2 border-black border-solid  h-10' />
        <button className=' basis-1/4 font-semibold  text-black rounded border-6 bg-slate-300 border-black border-solid  h-10 '> Submit Task </button>
      </form>

      <div className=" w-11/12">
       <ul className="  list-none text-black p-4">
         {tasklist}
       </ul>
      </div>
    </div>

  )
}

export default App


function Tasknamelist ({ value , indexNum , taskname , setTaskname }) {

  let [ taskcomplete , setTaskcomplete] = useState(false)

  let deletetask=()=>{
     let finaltaskdata = taskname.filter((v,i)=> i!=indexNum)
     setTaskname(finaltaskdata);
  }

  let checktaskcomplete = ()=>{
    setTaskcomplete(!taskcomplete)
  }
  return(
    <li className = {(taskcomplete)? 'completetask' : '' } onClick={checktaskcomplete} >{indexNum+1}.  {value}<span className="absolute right-5" onClick={ deletetask}>&times;</span> </li>
  )
}



