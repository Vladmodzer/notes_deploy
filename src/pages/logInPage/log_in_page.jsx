import FirstButton from "../../components/first_next_button";
import Verification_inputs from "../../components/verification_inputs/verification_inputs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./logInPage.css";
function Log_in_page() {
  const blue = {
    background: " var(--firstInfoPagesButtinColor)",
  };

  return (
    <div className="wrapper_login">
      <div className="login-box">
        <div className="log-in__img-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="100%"
            viewBox="0 -960 960 960"
            width="100%"
            style={{ fill: "var(--firstInfoPagesButtinColor)" }}
          >
            <path
              d="M120-160v-112q0-34 17.5-62.5T184-378q62-31 126-46.5T440-440q20 0 40 1.5t40 4.5q-4 58 21 109.5t73 84.5v80H120
    ZM760-40l-60-60v-186q-44-13-72-49.5T600-420q0-58 41-99t99-41q58 0 99 41t41 99q0 45-25.5 80T790-290l50 50-60 60 60 60-80 80
    ZM440-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm300 80q17 0 28.5-11.5T780-440q0-17-11.5-28.5T740-480q-17 0-28.5 11.5T700-440q0 17 11.5 28.5T740-400Z"
            ></path>
          </svg>
        </div>
        <div>
          <h1>Welcome</h1>
        </div>

        <Verification_inputs />
        <a href="#">forgot password?</a>
        <FirstButton color={blue}>
          <p className="first_next_button_text">Log in</p>
        </FirstButton>
        <i className="fa-solid fa-eye" style={{ fontSize: 15, color: 'red' }}></i>
        
        <p className="login-text">dont have an account?<a href="/">Sign up</a></p>
      </div>
      
    </div>
  );
}

export default Log_in_page;
