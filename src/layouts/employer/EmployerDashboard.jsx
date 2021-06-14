import React from 'react'
import { Grid, Segment, Menu, Icon, Header } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function EmployerDashboard() {
    return (
        <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="2">
            <Menu icon="labeled" vertical>
              <Menu.Item name="gamepad" as={Link} to="/firma">
                <Icon name="home" color="red" />
                <b> Anasayfa </b>
              </Menu.Item>

              <Menu.Item name="Profil" as={Link} to="/firma/profil">
                <Icon name="id card outline" color="blue" />
                <b> Profil </b>
              </Menu.Item>

              <Menu.Item
                name="video play"
                as={Link}
                to="/firma/is-ilani-yayinla"
              >
                <Icon name="add" color="green" />
                <b> İş İlanı Yayınla</b>
              </Menu.Item>

              <Menu.Item
                name="Özgeçmişler"
                as={Link}
                to="/firma/ayarlar"
              >
                <Icon name="settings" color="pink" />
                <b> Ayarlar</b>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width="14">
            <Segment color="red">
              <Header>
                <div align="center">
                  {" "}
                  <Image src="https://i.hizliresim.com/26wm4zh.png" />
                </div>
                <h1 style={{ color: "red" }}>HRMS İşveren Profil Yönetimi</h1>
                <h5>
                  İşveren sayfasını sol taraftaki panellerden rahatça
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
