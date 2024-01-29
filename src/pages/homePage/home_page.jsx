import "./homePage.css";
import Curent_date from "../../components/curentDate/curent_date.jsx";
import Box_block_button from "../../components/boxBlockButton/box_block_button.jsx";
import New_note from "../../components/newNote/new_note.jsx";
function Home_page() {
  return (
    <div className="container">
      <Curent_date />
      <div className="home_burger-box">
        <h1 className="home-title">Notes</h1>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Group 5">
            <path
              id="Icon"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.33336 11C7.33336 10.325 6.78615 9.77778 6.11114 9.77778C5.43612 9.77778 4.88892 10.325 4.88892 11C4.88892 11.675 5.43612 12.2222 6.11114 12.2222C6.78615 12.2222 7.33336 11.675 7.33336 11ZM12.2223 11C12.2223 10.325 11.6751 9.77778 11.0001 9.77778C10.3251 9.77778 9.77785 10.325 9.77785 11C9.77785 11.675 10.3251 12.2222 11.0001 12.2222C11.6751 12.2222 12.2223 11.675 12.2223 11ZM15.889 9.77778C16.564 9.77778 17.1112 10.325 17.1112 11C17.1112 11.675 16.564 12.2222 15.889 12.2222C15.2139 12.2222 14.6667 11.675 14.6667 11C14.6667 10.325 15.2139 9.77778 15.889 9.77778Z"
              fill="#4E94F8"
            />
            <circle
              id="Ellipse 1"
              cx="11"
              cy="11"
              r="10.3889"
              stroke="#4E94F8"
              strokeWidth="1.22222"
            />
          </g>
        </svg>
      </div>
      <div className="notes-wrapp-box">
        <Box_block_button />
        <h3>Recent Notes</h3>
        <div className="notes-slide-box">
          <New_note color="" />
          <New_note color="" />
          <New_note color="" />
          
        </div>
      </div>
    </div>
  );
}

export default Home_page;
