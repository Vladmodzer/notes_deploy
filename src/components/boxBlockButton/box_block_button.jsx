import "./boxBlockButton.css";
import React from "react";

function Box_block_button() {
  return (
    <div>
      <input type="text" className="notes-search" />
      <div className="notes-button-box">
        <div className="notes-button-box__left">
          <button className="notes__all-notes">All Notes</button>
          <button className="notes__hidden">Hidden</button>
        </div>
        <div className="notes-button-box__right">
          <button className="notest__favorites">Favourites</button>
          <button className="notes__tresh">Trash</button>
        </div>
      </div>
    </div>
  );
}

export default Box_block_button;
