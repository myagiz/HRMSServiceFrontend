import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import { Image } from 'semantic-ui-react'


export default function Intro() {
  return (
    <div>
      <Segment  placeholder>
        <Header>
          <div align="center"> <Image
            src='https://i.hizliresim.com/26wm4zh.png'
          /></div>
          <h1>Human Resource Management System</h1>
          <h4>
            <a href="https://github.com/myagiz" target="blank">
              Created by Muhammet Yağız - GitHub Adress
            </a>
          </h4>
          <hr />
          <h5>
            Sistemimizden faydalanmak için isveren veya is arayan olarak
            ihtiyacınıza göre kayıt olmanız gerekmektedir.
          </h5>
        </Header>
        <br/>
        <Segment.Inline>
          <Button color="violet">İşveren Olarak Kayıt Ol</Button>
          <Button color="black">İş Arayan Olarak Kayıt Ol</Button>
        </Segment.Inline>
        <br/>
      </Segment>
    </div>
  );
}
