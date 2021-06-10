import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t1.18169-9/20799963_2048558225170235_4715010365196250690_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=174925&_nc_ohc=B1H7hS2i0JIAX8cFTqz&_nc_ht=scontent.fsaw2-1.fna&oh=1a62a59eec2532902395c3c13a9032af&oe=60E7DF73"
        />
        <Dropdown pointing="top left" text="Muhammet">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            ></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
