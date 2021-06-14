import React from "react";
import { Segment, Form,Button } from "semantic-ui-react";

export default function AdvertisementTypeOfWork() {
  return (
    <div>
      <Segment color="black">
        <h5>Çalışma Türü Bilgisi</h5>
        <Form.Field control="select">
          <option >İş Yeri</option>
          <option >Uzaktan</option>
        </Form.Field>
        <div align="right">
          <Button color="black" size="small">
          Çalışma Türü Ekle
          </Button>
        </div>
      </Segment>
      <br />
    </div>
  );
}
