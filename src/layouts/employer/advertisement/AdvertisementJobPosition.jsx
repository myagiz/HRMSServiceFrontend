import React from "react";
import { Segment, Form,Button } from "semantic-ui-react";

export default function AdvertisementJobPosition() {
  return (
    <div>
      <Segment color="pink">
        <h5>İş Pozisyon Bilgisi</h5>
        <Form.Field control="select">
          <option value="male">Java Developer</option>
          <option value="female">.Net Developer</option>
        </Form.Field>
        <div align="right">
          <Button color="pink" size="small">
          İş Pozisyonu Ekle
          </Button>
        </div>
      </Segment>
      <br/>
    </div>
  );
}
