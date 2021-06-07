import React, { Component } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";

export default class AccordionExampleInverted extends Component {
  state = { activeIndex: 0 };

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    return (
      <Segment inverted>
        <h2>Sıkça Sorulan Sorular</h2>
        <Accordion inverted>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name="question circle" />
            İş arıyorum ve iş ilanlarına nasıl ulaşırım ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              <Icon name="angle double right" />
              İş arayan kaydı oluşturup, bu üyeliğinize girerek sistemdeki iş
              ilanları menüsüne gözatıp başvuru yapabilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name="question circle" />
            Firmamıza çalışan arıyorum, nasıl ilan oluşturabilirim ?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              <Icon name="angle double right" />
              İşveren üyeliğinizi olması gerekmektedir. Bu üyeliğinizi
              oluşturduktan sonra üyeliğinize girip "İş İlanı Yayınla" kısmından
              oluşturabilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name="question circle" />
            Üyelik bilgilerimi kaybettim nasıl ulaşabilirim?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              <Icon name="angle double right" />
              Şifre sıfırlama kısmından mailinize gelen onayı kabul ederek yapabilirsiniz. Aksi takdirde hrms@hrms.com adresine ulaşabilirsiniz.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={this.handleClick}
          >
            <Icon name="question circle" />
            CV oluşturabiliyor muyuz?
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p>
              <Icon name="angle double right" />
              Sistemimiz içerisinden gerekli üyeliğinizi oluşturduktan sonra "CV
              oluştur" kısmından gerekli düzenlemeleri yapabilirsiniz.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    );
  }
}
