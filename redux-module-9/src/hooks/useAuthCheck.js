import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  // localStorage is the function of browser and its a side effect
  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");
    //console.log(JSON.parse(localAuth))
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      // parse returns plain JavaScript object
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useAuthCheck;
