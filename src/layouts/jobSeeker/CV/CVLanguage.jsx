import React from 'react'
import {
    Segment,
    Form,
    Input,
    Button,
  } from "semantic-ui-react";

export default function CVLanguage() {
    return (
        <Segment color="orange">
        <h5>Yabancı Dil Bilgileriniz</h5>
        <Form.Group widths="equal">
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Yabancı Dil Adı"
          />
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            placeholder="Beceri Puanı"
          />
        </Form.Group>

        <div align="right">
          <Button color="orange" size="small">
            Yabancı Dil Bilgilerini Ekle
          </Button>
        </div>
      </Segment>
    )
}
