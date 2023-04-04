import React, { useState } from "react";

function CreateArea(props) {

  const[inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event){
    const {name, value} = event.target;
    setInputNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputNote.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputNote.content} />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
