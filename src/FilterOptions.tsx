import * as React from "react";
import Autosuggest from "react-autosuggest";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import Dropdown from "react-dropdown";

import "./FilterOptions.css";

import "react-dropdown/style.css";

function getCheckboxLabel(value: string, text: string): React.Component {
  return (
    <label key={value}>
      <Checkbox value={value} />
      <span> {text}</span>
    </label>
  );
}

interface Selection {
  value: string;
  text: string;
}

function getCheckboxLabels(
  selections: Array<Selection>
): Array<React.Component> {
  return selections.map(selection =>
    getCheckboxLabel(selection.value, selection.text)
  );
}

export class FilterOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.defaultSelections
        ? this.props.defaultSelections
        : [""],
      value: "",
      suggestions: [],
    };
  }

  // Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = (value: string): boolean => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : this.props.selections.filter(
          (selection: Selection): boolean =>
            selection.text.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = (suggestion: Selection): string => suggestion.text;

  // Use your imagination to render suggestions.
  renderSuggestion = (suggestion: Selection): React.Component => (
    <div>{suggestion.text}</div>
  );

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }): void => {
    this.setState({
      suggestions: this.getSuggestions(value),
    });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue }): void => {
    console.log(event);
    console.log(suggestion);
    console.log(suggestionValue);
    if (this.state.options.indexOf(suggestion.value) === -1) {
      this.state.options.push(suggestion.value);
    }
    this.setState({
      value: "",
    });
    this.props.selectionsChanged(this.state.options);
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = (): void => {
    console.log("clear requested");
    this.setState({
      suggestions: [],
    });
  };

  onAutosuggestChange = (event, { newValue }): void => {
    this.setState({
      value: newValue,
    });
  };

  optionsChanged = (newOptions): void => {
    this.setState({
      options: newOptions,
    });
    this.props.selectionsChanged(newOptions);
  };

  public render(): React.Component {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: "Type a material",
      value,
      onChange: this.onAutosuggestChange,
    };

    return (
      <div className="FilterOptions">
        <div className="optionsTitle">
          <h4>{this.props.title}</h4>
        </div>
        <div className="viewBy">
          <span>View By</span>
          <Dropdown
            className="dropdown"
            options={this.props.dropdown.options}
            onChange={this._onSelect}
            value={this.props.dropdown.defaultOption}
            placeholder="Select an option"
          />
        </div>
        <Autosuggest
          className="autoSuggest"
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          highlightFirstSuggestion={true}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />

        <CheckboxGroup
          className="checkboxGroup"
          checkboxDepth={2} // This is needed to optimize the checkbox group
          name="optionGroup"
          value={this.state.options}
          onChange={this.optionsChanged}
        >
          {getCheckboxLabels(this.props.selections)}
        </CheckboxGroup>
      </div>
    );
  }
}
