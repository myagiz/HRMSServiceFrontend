import React from "react";
import { Grid, Segment, Form, Image, Button, List } from "semantic-ui-react";

export default function JobSeekerCVMaker() {
  return (
    <Segment color="red">
      <div align="left">
        <h3>Özgeçmişler</h3>
      </div>
      <div align="right">
      <Button color="violet">Özgeçmiş Oluştur</Button>
      </div>
      <br />
      <Grid>
        <Grid.Row>
          <Grid.Column width="16">
          <div align="left">
          <List divided verticalAlign="middle">
              <List.Item>
                <List.Content floated="right">
                 <Button color="red" size="tiny">Sil</Button><Button color="green" size="tiny">Güncelle</Button>
                </List.Content>
                <Image avatar src="https://i.hizliresim.com/26wm4zh.png" />
                <List.Content>Özgeçmiş - 1</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                <Button color="red" size="tiny">Sil</Button><Button color="green" size="tiny">Güncelle</Button>
                </List.Content>
                <Image avatar src="https://i.hizliresim.com/26wm4zh.png" />
                <List.Content>Özgeçmiş - 2</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                <Button color="red" size="tiny">Sil</Button><Button color="green" size="tiny">Güncelle</Button>
                </List.Content>
                <Image avatar src="https://i.hizliresim.com/26wm4zh.png" />
                <List.Content>Özgeçmiş - 3</List.Content>
              </List.Item>
              <List.Item>
                <List.Content floated="right">
                <Button color="red" size="tiny">Sil</Button><Button color="green" size="tiny">Güncelle</Button>
                </List.Content>
                <Image avatar src="https://i.hizliresim.com/26wm4zh.png" />
                <List.Content>Özgeçmiş - 4</List.Content>
              </List.Item>
            </List>
          </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
