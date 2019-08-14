import { FilterOptions } from "./FilterOptions";

import * as React from "react";

import "./FilterComponent.css";

const itemSelections = [
  { value: "glass", text: "Glass" },
  { value: "plastic", text: "Plastic" },
  { value: "paper", text: "Paper" },
  { value: "metal", text: "Metal" },
];

const itemDefaultSelections = ["glass", "paper"];

const siteSelections = [...Array(20).keys()].map(i => ({
  value: "place" + i,
  text: "Place " + i,
}));

const siteDefaultSelections = ["place2"];

function itemsChanged(items: Array<string>): void {
  console.log(items);
}

function sitesChanged(sites: Array<string>): void {
  console.log(sites);
}

export class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  public render(): React.Component {
    return (
      <div className="FilterComponent">
        <div className="title">
          <h2>Settings</h2>
        </div>
        <FilterOptions
          className="filterOptions"
          title="Items"
          dropdown={{
            options: ["three", "two", "one"],
            defaultOption: "three",
          }}
          selections={itemSelections}
          defaultSelections={itemDefaultSelections}
          selectionsChanged={itemsChanged}
        />
        <FilterOptions
          className="filterOptions"
          title="Site"
          dropdown={{
            options: ["three", "two", "one"],
            defaultOption: "three",
          }}
          selections={siteSelections}
          defaultSelections={siteDefaultSelections}
          selectionsChanged={sitesChanged}
        />
      </div>
    );
  }
}
