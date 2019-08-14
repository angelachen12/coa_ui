import { FilterComponent } from "./FilterComponent";
import { HistoricalTrendsComponent } from "./HistoricalTrendsChart";

import * as React from "react";
import { Grid, Col, Panel } from "react-bootstrap";

import "./Trends.css";

export class Trends extends React.Component {
  public render(): React.Component {
    return (
      <Grid fluid={true}>
        <Panel>
          <Panel.Heading>Historical Trends</Panel.Heading>
          <Panel.Body>
            <Col md={9}>
              <div>
                <HistoricalTrendsComponent />
              </div>
            </Col>
            <Col md={3}>
              <div>
                <FilterComponent />
              </div>
            </Col>
          </Panel.Body>
        </Panel>
      </Grid>
    );
  }
}
