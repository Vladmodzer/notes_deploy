import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./createNotes.css";
import React from "react";
import FirstButton from "../../components/first_next_button.jsx";
import { Link } from "react-router-dom";
import PageBtnColorChange from "../../functions/pageBtnColorChange.js";

function CreateNotes() {
  function checkPageBtnColor(){
    PageBtnColorChange("homebtn");
  }
  return (
    <div>
      <Header title={"Create Note"} />
      <div className="create-wrapper">

      <div className="container" style={{ height: "60vh" }}>
        <input className="create-notes-input" type="text" placeholder="Title"/>
        <textarea className="create-notes-textarea" type="text" placeholder="Body" />
      </div>
      <div className="container">

      <div className="create-note-button-box">
        <Link to="/" onClick={() => checkPageBtnColor()}>
        <FirstButton color={{background:'var(--hidden-notes-bg)'}}>Save</FirstButton>
        </Link>
      </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateNotes;
