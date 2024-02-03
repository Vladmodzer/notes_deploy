import React, { useContext } from "react";
import "./newNote.css";
import { useAppContext } from "../appContex.jsx";
import MakeShortText from "../../functions/makeShortText.js";
import { Link } from "react-router-dom";

const colors = {
  allnotes: "var(--all-notes-bg-dont-btn)",
  hiddennotes: "var(--favorites-notes-bg-dont-btn)",
  favorites: "var(--hidden-notes-bg-dont-btn)",
  trash: "var(--trash-notes-bg-dont-btn)",
};
const text = ` Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel mollitia
enim dolores quae magnam qui deserunt delectus commodi error facere?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel mollitia
enim dolores quae magnam qui deserunt delectus commodi error facere?
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel mollitia
enim dolores quae magnam qui deserunt delectus commodi error facere?`;

function New_note() {
  const { activeColor } = useAppContext();
  const {isTextViewNote,setTextViewNote} =useAppContext();
  function addText(text) {
    setTextViewNote(text)
  }
  const {editableText} = useAppContext();

  return (
    <Link   to="/view_note" onClick={() => addText(text)}>
      <div
  
        className="note"
        style={{
          background: activeColor ? colors[activeColor] : "var(--white-col)",
        }}
      >
        <h2 className="note-title">title</h2>
        <div className="line"></div>
        <p className="new-note-text">{MakeShortText(isTextViewNote? isTextViewNote : text , 200)}</p>
      </div>
    </Link>
  );
}

export default React.memo(New_note);
