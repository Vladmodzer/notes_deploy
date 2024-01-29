import React from 'react';
import './verificationInputs.css'
const styles = {
  inputsBox: {
    display: 'flex',
    flexDirection: 'column',
  }
  
};
function Verification_inputs() {
  return (
    <div className='inputs-box' >
  
        <form className='verification-form' action="" style={styles.inputsBox}>
          <label htmlFor="username"></label>
          <input style={styles.input} className='verification-input' type="text" id="username" autoComplete="username" placeholder='Username' />

          <label htmlFor="password"></label>
          <input style={styles.input} className='verification-input' type="password" id="password" autoComplete="current-password"
          placeholder='Password'
          />
        </form>
    </div>
  );
}

export default Verification_inputs;
