import React from "react";
import { Icon, Segment, Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";

export default function AddEmployer() {
  return (
    <div>
      <Segment>
        <br />
        <div>
          <h2>
            <Icon name="signup"></Icon> İşveren HRMS Kayıt Formu
          </h2>
        </div>
        <br />
        <br />
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Şirket Adınız"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Şirket Web Adresiniz"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Şirket Email Adresiniz"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Şirket İletişim Tel No"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Şifreniz"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Şifre Tekrarı"
            />
          </Form.Group>
          <br />
          <Button positive attached="bottom">
            Kayıt Formunu Gönderiniz
          </Button>
        </Form>
      </Segment>
    </div>
  );
}
