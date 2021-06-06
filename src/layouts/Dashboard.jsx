import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import Intro from "./Intro";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16">
            <Intro></Intro>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
