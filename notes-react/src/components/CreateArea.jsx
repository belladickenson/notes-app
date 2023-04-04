import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

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

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
    <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={inputNote.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={inputNote.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
