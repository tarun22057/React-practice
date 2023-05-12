import React from "react";

function Note(props) {
  return (
    <section>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </section>
  );
}
export default Note;
