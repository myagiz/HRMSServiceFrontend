import React from "react";
import { Grid, Segment, Menu, Icon,Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function StaffDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <Menu icon="labeled" vertical>
              <Menu.Item name="gamepad">
                <Icon name="home" />
                <b> Anasayfa </b>
              </Menu.Item>

              <Menu.Item name="video camera">
                <Icon name="adn" />
                <b> Yöneticiler </b>
              </Menu.Item>

              <Menu.Item 
              name="video camera"
              as={Link}
              to="/yonetici/isverenler">
                <Icon name="hand point down" />
                <b> İşverenler </b>
              </Menu.Item>

              <Menu.Item 
              name="video play"
              as={Link}
              to="/yonetici/is-arayanlar">
                <Icon name="hand point down" />
                <b> İş Arayanlar</b>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width="14">
            <Segment color="violet">
              <Header>
                <div align="center">
                  {" "}
                  <Image src="https://i.hizliresim.com/26wm4zh.png" />
                </div>
                <h1>HRMS Yönetici Sayfası</h1>
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
