import React, { Component, useState, useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { Button } from "bootstrap";
import Form from "react-bootstrap/Form";
import Jumbotron from "../jumbotron";
import { useEffect } from "react";
import Joi from "joi-browser";
import Alert from "react-bootstrap/Alert";
import useAuth from "../../services/useAuth";
import AuthContext from "../../services/authProvider";
import httpService from "../../services/httpService";
import { useHistory } from 'react-router-dom';

const LoginRegister = () => {
  //for rerouting
  const history = useHistory();

  //const { setAuth } = useAuth();
  const [loginUserName, setLoginUserName] = useState("");
  const [loginUserPassword, setLoginUserPassword] = useState("");
  const [user, setUser] = useState();
  const { setAuth } = useContext(AuthContext);

  const [registerName, setRegisterName] = useState("");
  
  const [registerUserName, setRegisterUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [registerUserPassword, setRegisterUserPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [registerUserEmail, setRegisterUserEmail] = useState("");
  const [registerUserOrgId, setRegisterUserOrgId] = useState("");

  // const userRef = useRef();
  // const errRef = useRef();

  const [registerFormValidate, setRegisterFormValidate] = useState(false);
  const [errorLog, setErrorLog] = useState({});
  const btnText = "Learn more";

//   const Username_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const Password_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // useEffect(() => {
  //     userRef.current.focus();
  // }, [])

  // useEffect(() => {
  //     setValidName(USER_REGEX.test(user));
  // }, [user])

  // useEffect(() => {
  //     setValidPwd(PWD_REGEX.test(pwd));
  // }, [pwd])

  // useEffect(() => {
  //   setErrMsg('');
  // }, [user, pwd, matchPwd])

  // const schema = {
  //   name: Joi.string().required().label("Name"),
  //   username: Joi.string().required().label("Username"),
  //   password: Joi.string().required().label("Password"),
  //   newUsername: Joi.string().required().label("Username"),
  //   newPassword: Joi.string().required().label("Password").min(8),
  //   email: Joi.string().required().label("Email").email(),
  //   orgId: Joi.string().required().label("Organization ID"),
  // };

  const doSubmitLogin = async (e) => {
    e.preventDefault();
    localStorage.clear();
    const user = { loginUserName, loginUserPassword };
    try {
      const response = await httpService.post(
        "http://api.linkupss.com/adminlogin",
        { user_name: loginUserName, user_password: loginUserPassword },
        
      );
      console.log(response?.data);
      const accessToken = response?.data?.accessToken;
      setAuth({ user_name: loginUserName, user_password: loginUserPassword, accessToken });
      // set the state of the user
      setUser(response.data);
      // store the user in localStorage
      localStorage.setItem("user", JSON.stringify(loginUserName));
      return history.push('/users');
    } catch (err) {
      if (!err?.response) {
        console.log("No Server Response");
      } else if (err.response?.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  const doSubmitRegister = async (e) => {
    e.preventDefault();
      try {
        const response = await httpService.post("https://api.linkupss.com/adminregister",
            JSON.stringify({name: registerName, user_name: registerUserName, user_password: registerUserPassword, extra_info: registerUserEmail}),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            }
        );
        // TODO: remove console.logs before deployment
        console.log(JSON.stringify(response?.data));
        console.log('Success')
    } catch (err) {
        if (!err?.response) {
          console.log('No Server Response');
        } else if (err.response?.status === 409) {
          console.log('Username Taken');
        } else {
          console.log('Registration Failed');
        }
      }
  };
  // try {
  //   await login()
  // } catch (ex) {

  // }

  // const validateProperty = (type, val) => {
  //   const obj = { [type]: val };
  //   const schemas = { [type]: schema[type] };
  //   console.log(obj, schemas);
  //   const { error } = Joi.validate(obj, schemas); //youre picking the {error} property of the returned Joi object
  //   return error ? error.details[0].message : null;
  // };
  // const handleLoginUserName = (e) => {
  //   setLoginUserName(e.target.value);
  //   console.log(e.currentTarget.value);
  //   const errormsg = validateProperty("username", e.currentTarget.value);
  //   console.log(errormsg);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["username"] = errormsg;
  //   else delete errors["username"];
  //   setErrorLog(errors);
  // };
  // const handleLoginUserPassword = (e) => {
  //   setLoginUserPassword(e.target.value);
  //   const errormsg = validateProperty("password", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["password"] = errormsg;
  //   else delete errors["password"];
  //   setErrorLog(errors);
  // };
  // const handleRegisterName = (e) => {
  //   setRegisterName(e.target.value);
  //   const errormsg = validateProperty("name", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["name"] = errormsg;
  //   else delete errors["name"];
  //   setErrorLog(errors);
  // };

  // const handleRegisterUserName = (e) => {
  //   setRegisterUserName(e.target.value);
  //   const errormsg = validateProperty("newUsername", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["newUsername"] = errormsg;
  //   else delete errors["newUsername"];
  //   setErrorLog(errors);
  // };
  // const handleRegisterUserPassword = (e) => {
  //   setRegisterUserPassword(e.target.value);
  //   const errormsg = validateProperty("newPassword", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["newPassword"] = errormsg;
  //   else delete errors["newPassword"];
  //   setErrorLog(errors);
  // };
  // const handleRegisterUserEmail = (e) => {
  //   setRegisterUserEmail(e.target.value);
  //   const errormsg = validateProperty("email", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["email"] = errormsg;
  //   else delete errors["email"];
  //   setErrorLog(errors);
  // };
  // const handleRegisterOrgId = (e) => {
  //   setRegisterUserOrgId(e.target.value);
  //   const errormsg = validateProperty("orgId", e.currentTarget.value);
  //   const errors = { ...errorLog };
  //   if (errormsg) errors["orgId"] = errormsg;
  //   else delete errors["orgId"];
  //   setErrorLog(errors);
  // };
  // const handleLoginValidation  = () =>{
  //   const data = {loginUserName,loginUserPassword};
  //   const {error} = Joi.validate(data,schema,{abortEarly:false})
  //   if (!error) return null;
  //   const errors = {};
  //   for(let item of error.details) errors[item.path[0]] = item.message;
  //   return errors;
  // }

  return (
    <div className="row modal-header text-center ">
      {/* Login Side */}
      <Form className="col-md-6 align-items-start" onSubmit={doSubmitLogin}>
        <h1 className="text-primary">Login</h1>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              //id="username"
              value={loginUserName}
              //isInvalid={errorLog["username"]}
              onChange={(e) => setLoginUserName(e.target.value)}
              required
              //onChange={handleLoginUserName}
            />
          </InputGroup>
          {/* {console.log(errorLog["username"])}
          {errorLog["username"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["username"]}
            </Alert>
          )} */}
        </div>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              //id="password"
              value={loginUserPassword}
             // ref={userRef}
              //isInvalid={errorLog["password"]}
             // onChange={(e) => setLoginUserPassword(e.target.value)}
              //aria-invalid={validName ? "false" : "true"}
              //aria-describedby="uidnote"
              //onFocus={() => setUserFocus(true)}
             // onBlur={() => setUserFocus(false)}
              onChange={(e) => setLoginUserPassword(e.target.value)}
              required
              //onChange={handleLoginUserPassword}
            />
          </InputGroup>
          {/* {errorLog["password"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["password"]}
            </Alert>
          )} */}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          //onClick={() => doSubmitLogin()}
        >
          Login
        </button>
      </Form>

      {/* Register Side */}
      <Form className="col-md-6 align-items-start" onSubmit={doSubmitRegister}>
        <h1 className="text-primary">Register</h1>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              //onChange={handleRegisterName}
            />
          </InputGroup>
          {/* {console.log(errorLog["name"])}
          {errorLog["name"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["name"]}
            </Alert>
          )} */}
        </div>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={registerUserName}
              onChange={(e) => setRegisterUserName(e.target.value)}
              //onChange={handleRegisterUserName}
            />
          </InputGroup>
          {/* {console.log(errorLog["newUsername"])}
          {errorLog["newUsername"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["newUsername"]}
            </Alert>
          )} */}
        </div>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="New Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              value={registerUserPassword}
              onChange={(e) => setRegisterUserPassword(e.target.value)}
              //onChange={handleRegisterUserPassword}
            />
          </InputGroup>
          {/* {console.log(errorLog["newPassword"])}
          {errorLog["newPassword"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["newPassword"]}
            </Alert>
          )} */}
        </div>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Email Address"
              aria-label="Email Address"
              aria-describedby="basic-addon1"
              value={registerUserEmail}
              onChange={(e) => setRegisterUserEmail(e.target.value)}
              //onChange={handleRegisterUserEmail}
            />
          </InputGroup>
          {/* {console.log(errorLog["email"])}
          {errorLog["email"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["email"]}
            </Alert>
          )} */}
        </div>
        <div className="row d-flex justify-content-center">
          <InputGroup className="input-g mb-3">
            <Form.Control
              placeholder="Organization ID"
              aria-label="Organization ID"
              aria-describedby="basic-addon1"
              value={registerUserOrgId}
              onChange={(e) => setRegisterUserOrgId(e.target.value)}
              //onChange={handleRegisterOrgId}
            />
          </InputGroup>
          {/* {console.log(errorLog["orgId"])}
          {errorLog["orgId"] && (
            <Alert className="error-badge" variant={"danger"}>
              {errorLog["orgId"]}
            </Alert>
          )} */}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </Form>
    </div>
  );
};

export default LoginRegister;
