import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrorMessage("");
      try {
        const response = await axios.post("http://localhost:5000/user/register", {
          email: username,
          phoneNo,
          password,
        });
        if (response.data.message) {
          setMessage(response.data.message);
          setPassword("");
          setUsername("");
          setPhoneNo("");
          setConfirmPassword("");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          const message = error.response.data.message;
          setErrMsg(error.response.data.message);
        }
      }
    } else {
      setErrorMessage("Passwords do not match");
    }
  };
  const body = {
    backgroundColor: "#f8f9fa",
    height: "100vh",
  };

  const container = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const card = {
    border: "none",
    borderRadius: "20px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.1)",
  };
  const cardHeader = {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "20px 20px 0 0,",
  };
  const cardBody = {
    padding: "40px",
  };
  const btnRegister = {
    backgroundCcolor: "#007bff",
    border: "none",
    borderRadius: "20px",
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      ></link>
      <body style={body}>
        <div style={container}>
          <div className="justify-content-center row" style={{ width: "100%" }}>
            
            <div className="col-sm-8 col-md-6 col-xs-12">
              <div style={card}>
                <div style={cardHeader}>
                  <h3 className="text-center">Register</h3>
                </div>
                <div style={cardBody}>
                  <form onSubmit={handleSubmit}>
                    {errorMessage && (
                      <div style={{ color: "red", marginBottom: "1rem" }}>
                        {errorMessage}
                      </div>
                    )}
                    {}
                    {message ? (
                      <p
                        style={{
                          backgroundColor: "green",
                          marginBottom: "1rem",
                          color: "white",
                          borderRadius: "15px",
                        }}
                      >
                        {message}
                      </p>
                    ) : errMsg ? (
                      <p
                        style={{
                          backgroundColor: "red",
                          marginBottom: "1rem",
                          color: "white",
                          borderRadius: "15px",
                        }}
                      >
                        {errMsg}
                      </p>
                    ) : null}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Phone No</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                        placeholder="Enter Phone number"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="confirm_password">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control"
                        id="confirm_password"
                        name="confirm_password"
                        placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-block btn btn-primary"
                      style={btnRegister}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Bootstrap JS and dependencies --> */}
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
      </body>
    </>
  );
}

export default Register;
