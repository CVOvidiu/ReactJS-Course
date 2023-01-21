import React, { useState, useEffect, useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const loggedInInfo = localStorage.getItem("isLoggedIn");
  //
  // This would create an infinite loop
  // if(loggedInInfo === 'true') {
  //   setIsLoggedIn(true); // *
  // }

  // This would only run once, when the App starts because the dependencies do not change because we do not have dependencies
  // useEffect(() => {
  //   const loggedInInfo = localStorage.getItem("isLoggedIn");

  //   if (loggedInInfo === "true") {
  //     setIsLoggedIn(true); // Will reexecute but will not go through useEffect anymore because the deps didn't change
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   localStorage.setItem("isLoggedIn", "true");

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");

  //   setIsLoggedIn(false);
  // };

  const authCtx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
