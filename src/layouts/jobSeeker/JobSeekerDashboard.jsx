import React from 'react'
import { Grid, Segment, Menu, Icon, Header} from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobSeekerDashboard() {
    return (
        <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <Menu icon="labeled" vertical>
              <Menu.Item 
              name="gamepad"
              as={Link}
              to="/aday">
                <Icon name="home" color="violet" />
                <b> Anasayfa </b>
              </Menu.Item>

              <Menu.Item name="Profil">
                <Icon name="id card outline" color="blue" />
                <b> Profil </b>
              </Menu.Item>

              <Menu.Item
                name="video camera"
                as={Link}
                to="/yonetici/isverenler"
              >
                <Icon name="info" color="red" />
                <b> Özgeçmişler </b>
              </Menu.Item>

              <Menu.Item
                name="video play"
                as={Link}
                to="/yonetici/is-arayanlar"
              >
                <Icon name="newspaper" color="green" />
                <b> Başvurulan İlanlar</b>
              </Menu.Item>

              <Menu.Item
                name="Özgeçmişler"
                as={Link}
                to="/yonetici/ozgecmisler"
              >
                <Icon name="settings" color="pink" />
                <b> Ayarlar</b>
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
                <h1>HRMS İş Arayan Aday Profil Yönetimi</h1>
                <h5>
                  Aday sayfasını sol taraftaki panellerden rahatça
                  kullanabilirsiniz.Sıkıntı oluşan durumlarda bizimle iletişime
                  geçmekten çekinmeyiniz.
                </h5>
              </Header>
              <br />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
}
