import React from "react";

function Note(props) {
  const handleDelete = (e) => {
    props.onDelete(props.id);
    e.preventDefault();
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}

export default Note;
