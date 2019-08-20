import { getData } from "./BackendAccessor";
import { DateRangeComponent } from "./DateRange";
import { DebrisBreakdownComponent } from "./DebrisBreakdown";
import { DirtyDozenComponent } from "./DirtyDozen";
import { FilterComponent } from "./FilterComponent";
import { HistoricalTrendsComponent } from "./HistoricalTrendsChart";

import * as React from "react";
import { Panel, Grid, Row, Col } from "react-bootstrap";
import Select from "react-select";

import "./LocationDetails.css";

interface SiteOption {
  label: string;
  value: string;
}

const COUNTY_STR = "county";
const TOWN_STR = "town";
const SITE_STR = "site";

function transformLocationsOptions(data): Array<SiteOption> {
  return data.map(name => {
    const val = name === undefined ? "" : name;
    return {
      label: val,
      value: val,
    };
  });
}

export class LocationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allLocations: {}, // All locations and categories to be retrieved from database
      currentCounty: undefined,
      currentTown: undefined,
      currentSite: undefined,
      dirtyDozen: undefined, // Component for 12 most common debris items
      debrisBreakdown: undefined, // Component for hierarchical breakdown of debris items
    };
  }

  componentDidMount(): void {
    const url = "locationsHierarchy";
    getData(url).then(this.updateLocations.bind(this));
  }

  updateLocations(data): void {
    console.log("LocationDetails::updateLocations", data);
    const allLocations = data.locationsHierarchy;

    console.log("LocationDetails::allLocations", allLocations);

    const defaultCounty = Object.keys(allLocations)[0];

    this.setState({
      allLocations: allLocations,
      currentCounty: defaultCounty,
    });

    this.setLocation(COUNTY_STR, defaultCounty);
    this.setDateRange(this.state.startDate, this.state.endDate);
  }

  handleCountyChanged(selection: SiteOption): void {
    console.log("LocationDetails::handleCountyChanged", selection);
    this.setState({
      currentCounty: selection.value,
      currentTown: undefined,
      currentSite: undefined,
    });
    this.setLocation(COUNTY_STR, selection.value);
  }

  handleTownChanged(selection: SiteOption): void {
    console.log("LocationDetails::handleTownChanged", selection);
    this.setState({
      currentTown: selection.value,
      currentSite: undefined,
    });

    this.setLocation(TOWN_STR, selection.value);
  }

  handleSiteChanged(selection: SiteOption): void {
    console.log("LocationDetails::handleSiteChanged", selection);
    this.setState({
      currentSite: selection.value,
    });

    this.setLocation(SITE_STR, selection.value);
  }

  handleDateRangeChanged(startDate: string, endDate: string): void {
    console.log("LocationDetails::handleDateRangeChanged", startDate, endDate);
    this.setState({
      startDate: startDate,
      endDate: endDate,
    });
    this.setDateRange(startDate, endDate);
  }

  setLocation(locationCategory: string, location: string): void {
    const value = {
      category: locationCategory,
      name: location,
    };
    this.dateRangeComponent.setLocation(value);
    this.debrisBreakdown.setLocation(value);
    this.dirtyDozen.setLocation(value);
  }

  setDateRange(startDate: string, endDate: string): void {
    if (this.debrisBreakdown) {
      this.debrisBreakdown.setDateRange(startDate, endDate);
    }
    if (this.dirtyDozen) {
      this.dirtyDozen.setDateRange(startDate, endDate);
    }
  }

  public render(): React.Component {
    return (
      <div>
        <Panel>
          <Panel.Body>
            <Grid fluid>
              <Row>
                <Col md={2}>
                  <h3 className="locDetailsHeading">Location Details</h3>
                </Col>
                <Col md={2}>
                  <Select
                    className="select-county"
                    options={transformLocationsOptions(
                      Object.keys(this.state.allLocations)
                    )}
                    value={transformForOption(this.state.currentCounty)}
                    onChange={this.handleCountyChanged.bind(this)}
                    ref={(selectCounty): void => {
                      this.selectCounty = selectCounty;
                    }}
                    placeholder={"Select County"}
                  ></Select>
                </Col>
                <Col md={2}>
                  <Select
                    className="select-town"
                    options={
                      this.state.currentCounty === undefined
                        ? undefined
                        : transformLocationsOptions(
                            Object.keys(
                              this.state.allLocations[this.state.currentCounty]
                            )
                          )
                    }
                    value={transformForOption(this.state.currentTown)}
                    onChange={this.handleTownChanged.bind(this)}
                    ref={(selectLocationCategory): void => {
                      this.selectLocationCategory = selectLocationCategory;
                    }}
                    placeholder={"Select Town"}
                  ></Select>
                </Col>
                <Col md={6}>
                  <Select
                    className="select-site"
                    options={
                      this.state.currentTown === undefined
                        ? undefined
                        : transformLocationsOptions(
                            this.state.allLocations[this.state.currentCounty][
                              this.state.currentTown
                            ]
                          )
                    }
                    value={transformForOption(this.state.currentSite)}
                    onChange={this.handleSiteChanged.bind(this)}
                    ref={(selectLocation): void => {
                      this.selectLocation = selectLocation;
                    }}
                    placeholder={"Select Site"}
                  ></Select>
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Debris Breakdown</Panel.Heading>
          <Panel.Body>
            <Grid fluid>
              <Row>
                <Panel>
                  <Panel.Body>
                    <Col md={12}>
                      <DateRangeComponent
                        onDateRangeChanged={this.handleDateRangeChanged.bind(
                          this
                        )}
                        ref={(dateRangeComponent): void => {
                          this.dateRangeComponent = dateRangeComponent;
                        }}
                      ></DateRangeComponent>
                    </Col>
                  </Panel.Body>
                </Panel>
              </Row>
              <Row>
                <Col md={6}>
                  <Panel>
                    <Panel.Heading>Hierarchy</Panel.Heading>
                    <Panel.Body>
                      <DebrisBreakdownComponent
                        ref={(debrisBreakdown): void => {
                          this.debrisBreakdown = debrisBreakdown;
                        }}
                      />
                    </Panel.Body>
                  </Panel>
                </Col>
                <Col md={6}>
                  <Panel>
                    <Panel.Heading>Dirty Dozen</Panel.Heading>
                    <Panel.Body>
                      <DirtyDozenComponent
                        ref={(dirtyDozen): void => {
                          this.dirtyDozen = dirtyDozen;
                        }}
                      />
                    </Panel.Body>
                  </Panel>
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>Historical View</Panel.Heading>
          <Panel.Body>
            <Grid fluid>
              <Row>
                <Col md={9}>
                  <HistoricalTrendsComponent />
                </Col>
                <Col md={3}>
                  <FilterComponent />
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
