import React from "react";
import { Grid, Segment, Menu, Icon, Header, Button } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function StaffDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <Menu icon="labeled" vertical>
              <Menu.Item 
              name="gamepad"
              as={Link}
              to="/yonetici">
                <Icon name="home" color="violet" />
                <b> Anasayfa </b>
              </Menu.Item>

              <Menu.Item name="video camera">
                <Icon name="adn" color="blue" />
                <b> Yöneticiler </b>
              </Menu.Item>

              <Menu.Item
                name="video camera"
                as={Link}
                to="/yonetici/isverenler"
              >
                <Icon name="hand point down" color="red" />
                <b> İşverenler </b>
              </Menu.Item>

              <Menu.Item
                name="video play"
                as={Link}
                to="/yonetici/is-arayanlar"
              >
                <Icon name="hand point down" color="green" />
                <b> İş Arayanlar</b>
              </Menu.Item>

              <Menu.Item
                name="İş ilanları"
                as={Link}
                to="/yonetici/is-ilanlari"
              >
                <Icon name="list alternate" color="orange" />
                <b> İş ilanları</b>
              </Menu.Item>

              <Menu.Item
                name="Özgeçmişler"
                as={Link}
                to="/yonetici/ozgecmisler"
              >
                <Icon name="info" color="pink" />
                <b> Özgeçmişler</b>
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
                <h5>
                  Yönetici sayfasını sol taraftaki panellerden rahatça
                  kullanabilirsiniz.Sıkıntı oluşan durumlarda bizimle iletişime
                  geçmekten çekinmeyiniz.
                </h5>
              </Header>
              <br />
              <Segment.Inline>
                <Button color="violet">Yetkili Email Adresi</Button>
              </Segment.Inline>
              <br />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
