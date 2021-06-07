import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            name="İş İlanlarını Görüntüle"
            active={activeItem === "İş İlanlarını Görüntüle"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="home"></Icon>
            Anasayfa
          </Menu.Item>
          <Menu.Item
            name="Kariyer Rehberi"
            active={activeItem === "Kariyer Rehberi"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="paperclip"></Icon>
            Kariyer Rehberi
          </Menu.Item>
          <Menu.Item
            name="Pozisyon Rehberi"
            active={activeItem === "Pozisyon Rehberi"}
            onClick={this.handleItemClick}
            as={Link}
            to="/"
          >
            <Icon name="lightbulb outline"></Icon>
            Pozisyon Rehberi
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="İş İlanlarını Görüntüle"
              active={activeItem === "İş İlanlarını Görüntüle"}
              onClick={this.handleItemClick}
              as={Link}
              to="/isilanlari"
            >
              <Icon name="search"></Icon>
              İş İlanlarını Görüntüle
            </Menu.Item>

            <Menu.Item
              name="Giris"
              active={activeItem === "Giris"}
              onClick={this.handleItemClick}
              as={Link}
              to="/"
            >
              <Icon name="sign in"></Icon>
              Giriş
            </Menu.Item>
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
