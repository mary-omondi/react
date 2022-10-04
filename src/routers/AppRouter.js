import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateUser from "../components/createusers";
import Users from "../components/users";
import Header from "../components/header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Users}/>
          <Route path = "/createuser" component={CreateUser}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;