import React from "react";
import { Icon, Segment, Button } from "semantic-ui-react";
import { Form } from "semantic-ui-react";

export default function AddJobSeeker() {
  return (
    <div>
      <Segment>
        <br />
        <div>
          <h2>
            <Icon name="signup"></Icon> İş Arayan HRMS Kayıt Formu
          </h2>
        </div>
        <br />
        <br />
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Adınız"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Soyadınız"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="TC Kimlik Numaranız"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Doğum Tarihiniz"
            />
          </Form.Group>
          <br />
          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="Email Adresiniz"
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
          <Button positive attached='bottom'>Kayıt Formunu Gönderiniz</Button>
        </Form>
      </Segment>
    </div>
  );
}
