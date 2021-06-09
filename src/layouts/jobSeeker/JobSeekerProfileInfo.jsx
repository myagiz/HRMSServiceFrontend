import React from "react";
import { Grid, Segment, Form, Image } from "semantic-ui-react";

export default function JobSeekerProfileInfo() {
  return (
    <Segment color="blue">
      <div align="left">
        <h3>Profil Bilgileriniz</h3>
      </div>
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column width="12">
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Adınız" readOnly />
                <Form.Input fluid placeholder="Soyadınız" readOnly />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="TC Kimlik No" readOnly />
                <Form.Input fluid placeholder="Email Adresiniz" readOnly />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input fluid placeholder="Doğum Tarihiniz" readOnly />
                <Form.Input
                  fluid
                  placeholder="Şifreniz"
                  readOnly
                  type="password"
                />
              </Form.Group>
            </Form>
          </Grid.Column>

          <Grid.Column width="4" align="center">
            <Image src="https://i.hizliresim.com/26wm4zh.png" size="small" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
