import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button color="white" onClick={props.signIn} >
          Giriş Yap
        </Button>
      </Menu.Item>
    </div>
  );
}
