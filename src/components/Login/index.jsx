import React, { useState, useEffect } from "react";

import { Button, TextField } from "@mui/material";
import bgLogin from "../../assets/image/bg-login.jpg";

import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";

import {
  registerEmailDanPassword,
  loginEmailDanPassword,
  auth,
} from "../../authentication/firebase";

const Login = ({ status }) => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  // si useEffect !
  useEffect(() => {
    if (loading) {
      // Tampilkan screen loading..
      return;
    }

    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  const textEmailChange = (e) => {
    setCredential({
      ...credential,
      email: e.target.value,
    });
  };

  const textPasswordChange = (e) => {
    setCredential({
      ...credential,
      password: e.target.value,
    });
  };

  const changeLogin = (e) => {
    e.preventDefault();
    if (status == "login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  const submitHandle = () => {
    if (status == "login") {
      loginEmailDanPassword(credential.email, credential.password);
    } else {
      registerEmailDanPassword(credential.email, credential.password);
    }
  };

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginPage}>
          <Box className={styles.imgLogin} component="img" src={bgLogin} />
          <form className={styles.formLogin}>
            <h2 className={styles.titleLogin}>{status}</h2>
            <TextField
              label="Email"
              className={styles.inputLogin}
              sx={{ width: "350px" }}
              onChange={textEmailChange}
              value={credential.email}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              sx={{ width: "350px" }}
              type="password"
              onChange={textPasswordChange}
              value={credential.password}
            />
            <Button variant="contained" onClick={submitHandle}>
              {status}
            </Button>
            {/* <a>Register Page</a> */}
            {status == "login" ? (
              <a href="#" onClick={changeLogin}>
                Register Page
              </a>
            ) : (
              <a href="#" onClick={changeLogin}>
                Login Page
              </a>
            )}
            <Link to="/">Home</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
