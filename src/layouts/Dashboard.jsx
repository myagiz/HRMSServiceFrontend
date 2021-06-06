import React from "react";
import { Grid } from "semantic-ui-react";
import JobAdvertisementList from "../pages/JobAdvertisementList";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="14">
             <JobAdvertisementList></JobAdvertisementList>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
