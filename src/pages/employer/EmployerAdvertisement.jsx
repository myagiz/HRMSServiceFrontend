import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import AdvertisementGeneral from "../../layouts/employer/advertisement/AdvertisementGeneral";
import AdvertisementCity from "../../layouts/employer/advertisement/AdvertisementCity";
import AdvertisementJobPosition from "../../layouts/employer/advertisement/AdvertisementJobPosition";
import AdvertisementTypeOfWork from "../../layouts/employer/advertisement/AdvertisementTypeOfWork";
import AdvertisementWorkingTime from "../../layouts/employer/advertisement/AdvertisementWorkingTime";

export default function EmployerAdvertisement() {
  return (
    <Segment color="green">
      <div align="left">
        <h3>İş İlanı Yayınla</h3>
      </div>
      <br />
      <div align="left">
        <Form>
          <AdvertisementGeneral></AdvertisementGeneral>
          <AdvertisementJobPosition></AdvertisementJobPosition>
          <AdvertisementCity></AdvertisementCity>
          <AdvertisementTypeOfWork></AdvertisementTypeOfWork>
          <AdvertisementWorkingTime></AdvertisementWorkingTime>
          <br />
          <Button positive attached="bottom" size="large">
            İş İlanını Yayınla
          </Button>
        </Form>
      </div>
    </Segment>
  );
}
