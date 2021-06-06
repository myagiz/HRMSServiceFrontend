import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function Intro() {
  return (
    <div>
      <Segment placeholder>
        <Header icon>
          <Icon name="search" />
          <h1>Human Resource Management System</h1>
          <br />
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
        <Segment.Inline>
          <Button primary>Clear Query</Button>
          <Button>Add Document</Button>
        </Segment.Inline>
      </Segment>
    </div>
  );
}
