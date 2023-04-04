import React from "react";
import CloseIcon from '@mui/icons-material/Close';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><CloseIcon /></button>
    </div>
  );
}

export default Note;
