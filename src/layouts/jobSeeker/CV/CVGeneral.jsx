import React from 'react'
import {
    Segment,
    Form,
    TextArea,
    Input,
    Button,
  } from "semantic-ui-react";

export default function CVGeneral() {
    return (
        <div>
           <Segment color="violet">
            <h5>Genel Bilgileriniz</h5>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="Ön Yazı Metin Bölgeniz..."
            />
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              placeholder="Bilgisayar Yetenekleriniz"
            />
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Linkedin Profiliniz"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                placeholder="GitHub Profiliniz"
              />
            </Form.Group>
            <Button color="violet" size="tiny">Resim Yükle</Button>
          </Segment>  
        </div>
    )
}
