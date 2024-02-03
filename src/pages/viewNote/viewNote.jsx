import { Link } from "react-router-dom";

import "./viewNote.css";
import React, { useEffect, useState } from "react";
import { useAppContext } from "../../components/appContex";
import FirstButton from "../../components/first_next_button.jsx";
import PageBtnColorChange from "../../functions/pageBtnColorChange.js";

function ViewNote() {
  
  const { isTextViewNote, setTextViewNote } = useAppContext();

  const [editableText, setEditableText] = useState(isTextViewNote);
  useEffect(() => {
    // Set the initial text when the component mounts
    setEditableText(isTextViewNote);
  }, [isTextViewNote]);
  const handleTextAreaChange = (event) => {
    setEditableText(event.target.value);
  };
  function ifTextChanged(){
    
    if(isTextViewNote && editableText !== isTextViewNote) {
      console.log("isTextViewNote && editableText !== isTextViewNote");
        setTextViewNote(editableText)
    }
  };
  function checkPageBtnColor(){
    PageBtnColorChange("homebtn");
    ifTextChanged()
    
  }
  return (
    <div className="container">
      <Link className="view-box" to="/">
        <svg
          width="12"
          height="21"
          viewBox="0 0 12 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Arrow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.53714 20.0827L0.292152 10.9458C-0.097384 10.5612 -0.097384 9.93981 0.292152 9.5542L9.53714 0.417333C10.0995 -0.139111 11.0144 -0.139111 11.5777 0.417333C12.14 0.973776 12.14 1.87687 11.5777 2.43332L3.66913 10.2505L11.5777 18.0657C12.14 18.6231 12.14 19.5262 11.5777 20.0827C11.0144 20.6391 10.0995 20.6391 9.53714 20.0827Z"
            fill="#007AFF"
          />
        </svg>
        <h2>Back</h2>
      </Link>
      <div className="view-note-wrapper">
        <input  className="view-note-tittle" type="text" placeholder="tittle" />
      <textarea
        className="vnta"
        name="VnTa"
        id="vievNoteTextArea"
        cols="30"
        rows="18"
        value={editableText}
        onChange={handleTextAreaChange}
      ></textarea>
      <Link to="/" onClick={() => checkPageBtnColor()}>
      <FirstButton 
     
      color={{ background: "var(--firstInfoPagesButtinColor)" }}>
        Save
      </FirstButton>
      </Link>
      </div>
    </div>
  );
}

export default ViewNote;
