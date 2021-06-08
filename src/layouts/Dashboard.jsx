import React from "react";
import { Grid } from "semantic-ui-react";
import Accordion from "./Accordion";
import Intro from "./Intro";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="16">
            <Intro></Intro>
            <Accordion></Accordion>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
