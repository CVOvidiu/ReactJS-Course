import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };
  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };
  return { value: "", isValid: false };
};

const pwReducer = (state, action) => {
  if (action.type === "PW_INPUT")
    return { value: action.val, isValid: action.val.trim().length > 6 };
  if (action.type === "PW_BLUR")
    return { value: state.value, isValid: state.value.trim().length > 6 };
  return { value: "", isValid: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [pwState, dispatchPw] = useReducer(pwReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const { isValid: emailIsValid } = emailState;
  const { isValid: pwIsValid } = pwState;

  // Implement debouncing
  useEffect(() => {
    const id = setTimeout(() => {
      setFormIsValid(emailIsValid && pwIsValid);
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [emailIsValid, pwIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "EMAIL_INPUT", val: event.target.value });

    // // This is not optimal because we depend on another state
    // setFormIsValid(
    //   event.target.value.includes("@") && pwState.value.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPw({ type: "PW_INPUT", val: event.target.value });

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPw({ type: "PW_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, pwState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          isValid={pwIsValid}
          value={pwState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
