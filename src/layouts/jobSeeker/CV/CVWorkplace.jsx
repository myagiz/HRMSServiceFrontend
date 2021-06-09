import React from 'react'
import {
    Segment,
    Form,
    Input,
    Button,
    Checkbox,
  } from "semantic-ui-react";

export default function CVWorkplace() {
    return (
        <Segment color="blue">
        <h5>İş Deneyimleriniz</h5>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="İşyeri Adı"
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="İşyeri Pozisyonu"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Başlangıç Tarihi"
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Bitiş Tarihi"
          />
        </Form.Group>
        <Form.Field
          control={Checkbox}
          label="Çalışmaya hala devam ediyorum"
        />
        <div align="right">
          <Button color="blue" size="small">
            İş Deneyimi Detaylarını Ekle
          </Button>
        </div>
      </Segment>
    )
}
