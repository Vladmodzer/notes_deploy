import React from "react";
import { useState } from "react";
import "./boxBlockButton.css";
import { useAppContext } from "../appContex.jsx";
// import React, { useState } from "react";
const colors = {
  allnotes: "var(--all-notes-bg)",
  hiddennotes: "var(--favorites-notes-bg)",
  favorites: "var(--hidden-notes-bg)",
  trash: "var(--trash-notes-bg)",
};

function Box_block_button() {
  const [activeButton, setActiveButton] = useState(null);
  const { activeColor, setActiveColor } = useAppContext();

  const changeBg = (id) => {
    setActiveButton((prevActiveButton) => {
      if (prevActiveButton === id) {
        setActiveColor("");
        return null;
      } else {
        setActiveColor(id);
        return id;
      }
    });
  };

  const getButtonStyle = (id) => {
    return {
      background: activeButton === id ? colors[id] : "white",
    };
  };

  const getButtonTextStyle = (id) => {
    return {
      color: activeButton === id ? "var(--white-col)" : "inherit",
    };
  };
  return (
    <div className="button-block-wrapper">
      <input type="text" className="notes-search" placeholder="Search" />
      <div className="notes-button-box">
        <div className="notes-button-box__left">
          <button
            onClick={() => changeBg("allnotes")}
            style={getButtonStyle("allnotes")}
            id="allnotes"
            name="all-notes"
            className="notes__all-notes notes-button-height"
          >
            <div className="notes-round all-notes-circle-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
              >
                <path
                  d="M1 1.8C1 1.58783 1.08429 1.38434 1.23431 1.23431C1.38434 1.08429 1.58783 1 1.8 1H9.8L13.8 5V16.2C13.8 16.4122 13.7157 16.6157 13.5657 16.7657C13.4157 16.9157 13.2122 17 13 17H1.8C1.58783 17 1.38434 16.9157 1.23431 16.7657C1.08429 16.6157 1 16.4122 1 16.2V1.8Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.20001 7.4H10.6"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.20001 10.6H10.6"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              style={getButtonTextStyle("allnotes")}
              className="notes-button-text allnotes"
            >
              {" "}
              All Notes
            </p>
          </button>
          <button
            onClick={() => changeBg("hiddennotes")}
            style={getButtonStyle("hiddennotes")}
            id="hiddennotes"
            name="hidden-notes"
            className="notes__hidden notes-button-height"
          >
            <div className="notes-round favorites-notes-circle-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M8.25968 1.5064C8.51568 0.831199 9.48448 0.831199 9.74128 1.5064L11.3973 6.09362C11.5133 6.39762 11.8085 6.60002 12.1381 6.60002H16.2077C16.9597 6.60002 17.2877 7.53602 16.6965 7.99443L13.8005 10.6C13.6708 10.6998 13.576 10.838 13.5297 10.995C13.4834 11.1519 13.488 11.3195 13.5429 11.4736L14.6005 15.9561C14.8581 16.6761 14.0245 17.2945 13.3941 16.8513L9.46048 14.3553C9.32577 14.2606 9.16513 14.2098 9.00048 14.2098C8.83583 14.2098 8.67519 14.2606 8.54048 14.3553L4.60687 16.8513C3.97726 17.2945 3.14286 16.6753 3.40046 15.9561L4.45807 11.4736C4.51293 11.3195 4.51755 11.1519 4.47127 10.995C4.42499 10.838 4.33019 10.6998 4.20046 10.6L1.30445 7.99443C0.712451 7.53602 1.04205 6.60002 1.79245 6.60002H5.86207C6.0223 6.60055 6.17892 6.55242 6.31121 6.462C6.44349 6.37157 6.5452 6.24311 6.60287 6.09362L8.25888 1.5064H8.25968Z"
                  stroke="white"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p
              style={getButtonTextStyle("hiddennotes")}
              className="notes-button-text"
            >
              Favoritws
            </p>
          </button>
        </div>
        <div className="notes-button-box__right">
          <button
            onClick={() => changeBg("favorites")}
            style={getButtonStyle("favorites")}
            name="favorites-notes"
            className="notes__favorites notes-button-height"
          >
            <div className="notes-round hidden-notes-circle-bg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.74136 5.06156L1.60071 4.92092C0.478893 6.19418 0.0494843 7.43088 0.0410755 7.45611C-0.0136918 7.61916 -0.0136918 7.79564 0.0410755 7.95869C0.0577487 8.01109 1.8791 13.2647 7.93942 13.2647C8.59888 13.2647 9.20815 13.2017 9.77045 13.0907L9.60061 12.9208M1.74136 5.06156C1.21861 5.65664 0.850257 6.24318 0.607686 6.69508C0.476059 6.9403 0.381747 7.14536 0.320104 7.28987C0.289289 7.36211 0.266663 7.41916 0.251643 7.45846C0.237095 7.49652 0.229937 7.51726 0.229411 7.51879L0.22938 7.51888L0.229236 7.51931C0.188243 7.64135 0.188243 7.77344 0.229235 7.89549L0.230247 7.8985L0.230222 7.8985C0.230199 7.89843 0.230265 7.89862 0.230422 7.89907C0.233045 7.9066 0.261065 7.98705 0.319332 8.12404C0.380502 8.26785 0.474161 8.47196 0.604961 8.71614C0.866741 9.20482 1.27617 9.85187 1.86992 10.4969C3.05461 11.784 4.97469 13.0663 7.93942 13.0663C8.5349 13.0663 9.08774 13.0138 9.60061 12.9208M1.74136 5.06156C1.7846 5.01234 1.8289 4.96305 1.87428 4.91378L2.84377 5.88327M1.74136 5.06156L2.57102 5.89123M9.60061 12.9208C9.67981 12.9065 9.75805 12.8911 9.83536 12.8749L8.60714 11.6466M9.60061 12.9208L8.53113 11.8513M8.53113 11.8513C8.56169 11.8492 8.5921 11.8469 8.62237 11.8446L8.60714 11.6466M8.53113 11.8513L8.46679 11.787L8.60714 11.6466M8.53113 11.8513C8.34101 11.865 8.14496 11.8753 7.93942 11.8753C3.57149 11.8753 1.87443 8.72862 1.46445 7.78618L1.42949 7.70581L1.46533 7.62583C1.74737 6.99644 2.11997 6.41209 2.57102 5.89123M8.60714 11.6466C8.39039 11.6633 8.17046 11.6768 7.93942 11.6768C3.69092 11.6768 2.04504 8.62323 1.64647 7.707C1.94575 7.03913 2.34996 6.42343 2.84377 5.88327M2.57102 5.89123L2.70341 6.02362L2.84377 5.88327M2.57102 5.89123C2.61244 5.84339 2.65453 5.79609 2.69727 5.74934L2.84377 5.88327M4.14368 3.06851L4.24185 3.16665L4.36771 3.10812C5.34127 2.65539 6.51088 2.34775 7.93942 2.34775C10.9041 2.34775 12.8242 3.62999 14.009 4.91716C14.6028 5.56228 15.0123 6.20941 15.2742 6.69821C15.4051 6.94245 15.4988 7.14663 15.5601 7.29054C15.5907 7.36248 15.6132 7.41929 15.6281 7.45843C15.6433 7.49834 15.6502 7.5188 15.65 7.51803L15.6504 7.51931C15.6914 7.64135 15.6914 7.77344 15.6504 7.89548L15.6503 7.89592L15.6502 7.89604C15.6494 7.89832 15.638 7.93118 15.6145 7.9905C15.5902 8.05167 15.5536 8.14002 15.5033 8.25041C15.4028 8.47125 15.248 8.77983 15.0299 9.13521C14.5932 9.84658 13.9049 10.7415 12.8925 11.4971L12.7087 11.6343L12.8709 11.7965L15.3657 14.2913L14.5238 15.1333L0.513129 1.12266L1.3551 0.280689L4.14368 3.06851ZM11.7467 10.6723L11.8628 10.7884L11.9986 10.6961C13.4614 9.70123 14.1668 8.35343 14.4143 7.78639L14.4489 7.70713L14.4144 7.62782C14.0044 6.68544 12.3076 3.5391 7.94027 3.53869C7.08497 3.53145 6.23465 3.66959 5.42562 3.94722L5.12481 4.05044L5.34969 4.27531L6.78518 5.7108L6.88557 5.81119L7.01301 5.74862C7.29895 5.60822 7.60978 5.5236 7.93942 5.5236C9.13269 5.5236 10.1228 6.51373 10.1228 7.707C10.1228 8.03663 10.0382 8.34765 9.89833 8.63475L9.83635 8.76197L9.93642 8.86204L11.7467 10.6723Z"
                  fill="white"
                  stroke="#4E94F8"
                  strokeWidth="0.396982"
                />
              </svg>
            </div>
            <p
              style={getButtonTextStyle("favorites")}
              className="notes-button-text"
            >
              Hidden
            </p>
          </button>
          <button
            onClick={() => changeBg("trash")}
            style={getButtonStyle("trash")}
            name="tresh-notes"
            className="notes__tresh notes-button-height"
          >
            <div className="notes-round trash-notes-circle-bg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.84615 2.46154H13.5385V3.69231H12.3077V14.7692L11.0769 16H2.46154L1.23077 14.7692V3.69231H0V2.46154H3.69231V1.23077C3.69231 0.904349 3.82198 0.591298 4.05279 0.360484C4.28361 0.12967 4.59666 0 4.92308 0H8.61538C8.9418 0 9.25486 0.12967 9.48567 0.360484C9.71648 0.591298 9.84615 0.904349 9.84615 1.23077V2.46154ZM8.61538 1.23077H4.92308V2.46154H8.61538V1.23077ZM2.46154 14.7692H11.0769V3.69231H2.46154V14.7692ZM4.92308 4.92308H3.69231V13.5385H4.92308V4.92308ZM6.15385 4.92308H7.38461V13.5385H6.15385V4.92308ZM8.61538 4.92308H9.84615V13.5385H8.61538V4.92308Z"
                  fill="white"
                />
              </svg>
            </div>
            <p
              style={getButtonTextStyle("trash")}
              className="notes-button-text"
            >
              Trash
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Box_block_button);
