import React from "react";
import { Switch, Route } from "react-router";
import LocationPage from "./components/LocationPage";

// Routes
export default function Routes(props) {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/" component={LocationPage} />
        </Switch>
      </div>
    </div>
  );
}
