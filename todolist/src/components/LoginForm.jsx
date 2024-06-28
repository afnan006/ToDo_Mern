import React from 'react';
import './LoginForm.css';

const LoginForm = ({ email, setEmail, password, setPassword, handleSignInWithEmail, handleRegisterWithEmail, handleSignInWithGoogle }) => {
  return (
    <div id="form-ui">
      <div className="form-container">
        <div className="card">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">ToDo<br />Now-or-Never</div>
              <div id="welcome-line-2">Login or Register</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input 
                  placeholder="Email Address" 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-inp">
                <input 
                  placeholder="Password" 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="button" onClick={handleSignInWithEmail}>Login</button>
              <button id="submit-button" type="button" onClick={handleRegisterWithEmail}>Register</button>
            </div>
            <div id="forgot-pass">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div id="common-google">
            <button id="google-button" type="button" onClick={handleSignInWithGoogle}>Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
