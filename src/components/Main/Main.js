import React from "react";
import { Switch, Route } from "react-router-dom";
import DynamicImport from "../Common/DynamicImport";

const Home = props => (
  <DynamicImport load={() => import("../Home/Home")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const Data = props => (
  <DynamicImport load={() => import("../Data/Data")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const Analytics = props => (
  <DynamicImport load={() => import("../Analytics/Analytics")}>
    {Component =>
      Component === null ? <p>Loading</p> : <Component {...props} />
    }
  </DynamicImport>
);

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/data" component={Data} />
    <Route exact path="/analytics" component={Analytics} />
  </Switch>
);

export default Main;
