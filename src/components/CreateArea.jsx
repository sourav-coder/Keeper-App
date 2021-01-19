import React from "react";
import { Note } from "./Note";

// component 
function CreateArea(props) {

  const [note,setNote]=React.useState({
    title:'',
    content:''
  })


  const handleClick = (e) =>{
    // console.log(note.title,note.content);
    // <Note title={note.title} content={note.content} />

    // call onAdd prop to call the related function 
    props.onAdd(note)
    setNote({
      title:'',content:''
    })
    e.preventDefault();
   
  }


  
  function handleChange(e){
    console.log(e.target.name,e.target.value);
    setNote({'title':e.target.value,'content':note.content})
  }

  function handleChange1(e){
    setNote({'title':note.title,'content':e.target.value})
  } 




  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title"  value={note.title}   />
        <textarea  onChange={handleChange1}   name="content" placeholder="Take a note..." rows="3"  value={note.content} />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
