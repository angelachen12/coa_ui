import { HeaderNavigation } from "./HeaderNavigation";

import * as React from "react";

import "./App.css";

export class App extends React.Component {
  public render(): React.Component {
    return (
      <div className="App">
        <HeaderNavigation />
      </div>
    );
  }
}
