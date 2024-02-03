import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FirstButton from "../../components/first_next_button";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import "./userAccount.css";
import PageBtnColorChange from "../../functions/pageBtnColorChange";

function UserAccount() {
  const dropDawnMenuRef = useRef(null);

  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    // Select the DOM element after the component has mounted
    dropDawnMenuRef.current = document.querySelector(
      ".ua-language__drop-dawn-menu-box"
    );
  }, []);

  function checkPageBtnColor() {
    PageBtnColorChange("homebtn");
  }

  function dropDawnHandle() {
    if (dropDawnMenuRef.current) {
      dropDawnMenuRef.current.classList.toggle("hidden");
      dropDawnMenuRef.current.classList.toggle("drop-dawn-menu-show");
    }
  }

  function saveLanguage(lang) {
    setSelectedLanguage(lang);
  }

  function insertLanguage() {
    if (inputLanguageRef.current) {
      inputLanguageRef.current.value = selectedLanguage;
    }
  }

  return (
    <div className="user-account-wrapper">
      <Header title={"User Account"} />
      <div className="container" style={{ height: "100%" }}>
        <form className="user-account-form" action="">
          <label className="user-account__label" htmlFor="lang">
            Service language
          </label>
          <div className="ua-languages__box">
            <input
              id="lang"
              className="user-account__input ua_input-language"
              type="text"
              placeholder={
                selectedLanguage ? selectedLanguage : "chose language"
              }
            />
            <p onClick={dropDawnHandle} className="ua_btn-languages">
              Languages
            </p>
          </div>
          <div className="ua-language__drop-dawn-menu-box-wrapper">
            <div
              ref={dropDawnMenuRef}
              className="ua-language__drop-dawn-menu-box hidden"
            >
              <ul className="ua-language__drop-dawn-menu">
                <li>
                  <p
   
                    onClick={() => saveLanguage("german")}
                    className="language language-first "
                  >
                    German
                  </p>
                </li>
                <li>
                  <p

                    onClick={() => saveLanguage("english")}
                    className="language language-second"
                  >
                    English
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <label htmlFor="name">User name</label>
          <input id="name" className="user-account__input" type="text" />
          <label htmlFor="pass">Password</label>
          <input id="pass" className="user-account__input" type="text" />
          <label htmlFor="mail">E mail</label>
          <input id="mail" className="user-account__input" type="text" />
          <Link
            className="ua-btn-link-wrapper"
            to="/"
            onClick={() => checkPageBtnColor()}
          >
            <FirstButton
              
              onClick={insertLanguage}
              color={{
                background: "var(--hidden-notes-bg)",
                alignSelf: "center",
                justifySelf: "center",
              }}
            >
              Save
            </FirstButton>
          </Link>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default React.memo(UserAccount);
