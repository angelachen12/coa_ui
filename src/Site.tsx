import { LocationDetails } from "./LocationDetails";

import * as React from "react";
import { Grid, Col } from "react-bootstrap";

import "./Site.css";

export class Site extends React.Component {
  public render(): React.Component {
    return (
      <Grid fluid={true}>
        <Col xs={12}>
          <LocationDetails />
        </Col>
      </Grid>
    );
  }
}
