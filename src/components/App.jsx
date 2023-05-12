import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function allNotes(noteItems) {
  return (
    <Note
      key={noteItems.key}
      title={noteItems.title}
      content={noteItems.content}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(allNotes)}
      <Footer />
    </div>
  );
}
export default App;
