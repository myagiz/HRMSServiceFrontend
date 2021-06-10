import React, { useState } from "react";
import { Container, Icon, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/");
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
    history.push("/aday/profil");
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/"><Icon name="home"></Icon>Anasayfa</Menu.Item>
          <Menu.Item><Icon name="bolt"></Icon>Kariyer Rehberi</Menu.Item>
          <Menu.Item><Icon name="search"></Icon> İş İlanlarını Görüntüle</Menu.Item>

          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut}></SignedIn>
            ) : (
              <SignedOut signIn={handleSignIn}></SignedOut>
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
