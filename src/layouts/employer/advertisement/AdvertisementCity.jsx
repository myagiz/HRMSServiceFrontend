import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";

export default function AdvertisementCity() {
  return (
    <div>
      <Segment color="blue">
        <h5>Şehir Bilgisi</h5>
        <Form.Field control="select">
          <option value="male">Adana</option>
          <option value="female">Ankara</option>
        </Form.Field>
        <div align="right">
          <Button color="blue" size="small">
            Şehir Ekle
          </Button>
        </div>
      </Segment>
      <br />
    </div>
  );
}
