import React from "react";
import { Segment, Form,Button } from "semantic-ui-react";

export default function AdvertisementWorkingTime() {
  return (
    <div>
      <Segment color="red">
        <h5>Çalışma Zamanı Bilgisi</h5>
        <Form.Field control="select">
          <option>Tam Zamanlı</option>
          <option>Yarı Zamanlı</option>
          <option>Staj</option>
        </Form.Field>
        <div align="right">
          <Button color="orange" size="small">
          Çalışma Zamanı Ekle
          </Button>
        </div>
      </Segment>
      <br />
    </div>
  );
}
