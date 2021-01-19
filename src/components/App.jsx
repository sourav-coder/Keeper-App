import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNotes(note) {
    console.log(note);
    setNotes((prev) => {
      return [...prev, note];
    });
  }

  const deleteNote = (id) => {
    setNotes((prev) => {
      return prev.filter((note, index) => {
        return id !== index;
      });
    });
  };

  function handleMap(data, index) {
    return (
      <Note
        key={index}
        id={index}
        title={data.title}
        content={data.content}
        onDelete={deleteNote}
      />
    );
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map(handleMap)}
      <Footer />
    </div>
  );
}

export default App;
