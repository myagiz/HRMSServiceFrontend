import React from 'react'
import {
    Segment,
    Form,
    Input,
    Button,
    Checkbox,
  } from "semantic-ui-react";
  
export default function CVSchool() {
    return (
        <Segment color="red">
            <h5>Okul Bilgileriniz</h5>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Okul Adı"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Bölüm Adı"
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
            <Form.Field control={Checkbox} label="Okulum hala devam ediyor" />
            <div align="right">
              <Button color="red" size="small">
                Okul Detaylarını Ekle
              </Button>
            </div>
          </Segment>
    )
}
