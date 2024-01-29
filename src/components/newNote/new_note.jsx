import "./newNote.css";
function New_note(color) {

  return (
    <div className="note" style={{background:color.color}}>
      <h2>title</h2>
      <div className="line"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel mollitia
        enim dolores quae magnam qui deserunt delectus commodi error facere?
      </p>
    </div>
  );
}

export default New_note;
