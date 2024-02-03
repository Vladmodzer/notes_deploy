import React from "react";
import Box_block_button from "../boxBlockButton/box_block_button";
import New_note from "../newNote/new_note";
import "./main.css";

function Main() {
  return (
    <main className="notes-wrapp-box">
      <div className="container">
        <Box_block_button />
        <h3 className="main-title">Recent Notes</h3>
        <div className="notes-slide-box">
          <New_note />
          <New_note />
          <New_note />
          <New_note />
          <New_note />
          <New_note />
          <New_note />
        </div>
      </div>
    </main>
  );
}

export default React.memo(Main);
