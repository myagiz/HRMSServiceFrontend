import React, { Component } from "react";
import { Container, Menu, Button, Dropdown, Icon } from "semantic-ui-react";

const colors = ["violet"];

class ExampleMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { color } = this.props;
    const { activeItem } = this.state;

    return (
      <Menu color={color} inverted fixed="top" size="large">
        <Container>
          <Menu.Item
            name="Anasayfa"
            active={activeItem === "Anasayfa"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Kariyer Rehberi"
            active={activeItem === "Kariyer Rehberi"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="Pozisyon Rehberi"
            active={activeItem === "Pozisyon Rehberi"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Button color="violet" ><Icon name='search'></Icon>
               İş İlanlarını Görüntüle
               </Button>
            </Menu.Item>

            <Dropdown item text="Giriş Yap">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

const MenuExampleColoredInvertedMenus = () => {
  const menus = colors.map((color) => (
    <ExampleMenu color={color} key={color} />
  ));

  return <div>{menus}</div>;
};

export default MenuExampleColoredInvertedMenus;
