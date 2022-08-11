import React from "react";
import { useSelector } from "react-redux";
import RedirectUser from "./RedirectUser";

const AuthorizedRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <RedirectUser />;
};

export default AuthorizedRoute;