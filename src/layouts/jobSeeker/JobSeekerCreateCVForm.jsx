import React from "react";
import {
  Segment,
  Form,
  TextArea,
  Input,
  Button,
  Checkbox,
} from "semantic-ui-react";

export default function JobSeekerCreateCVForm() {
  return (
    <Segment>
      <div align="left">
        <h3>Özgeçmiş Oluştur</h3>
      </div>
      <br />
      <div align="left">
        <Form>
          <Segment color="violet">
            <h5>Genel Bilgileriniz</h5>
            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              placeholder="Ön Yazı Metin Bölgeniz..."
            />
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              placeholder="Bilgisayar Yetenekleriniz"
            />
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Linkedin Profiliniz"
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                placeholder="GitHub Profiliniz"
              />
            </Form.Group>
            <Button color="violet" size="tiny">Resim Yükle</Button>
          </Segment>

          <Segment color="red">
            <h5>Okul Bilgileriniz</h5>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Okul Adı"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Bölüm Adı"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Başlangıç Tarihi"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Bitiş Tarihi"
              />
            </Form.Group>
            <Form.Field control={Checkbox} label="Okulum hala devam ediyor" />
            <div align="right">
              <Button color="red" size="small">
                Okul Detaylarını Ekle
              </Button>
            </div>
          </Segment>

          <Segment color="blue">
            <h5>İş Deneyimleriniz</h5>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="İşyeri Adı"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="İşyeri Pozisyonu"
              />
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Başlangıç Tarihi"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Bitiş Tarihi"
              />
            </Form.Group>
            <Form.Field
              control={Checkbox}
              label="Çalışmaya hala devam ediyorum"
            />
            <div align="right">
              <Button color="blue" size="small">
                İş Deneyimi Detaylarını Ekle
              </Button>
            </div>
          </Segment>
          <Segment color="orange">
            <h5>Yabancı Dil Bilgileriniz</h5>
            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Yabancı Dil Adı"
              />
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                placeholder="Beceri Puanı"
              />
            </Form.Group>

            <div align="right">
              <Button color="orange" size="small">
                Yabancı Dil Bilgilerini Ekle
              </Button>
            </div>
          </Segment>
          <br />
          <Button positive attached="bottom" size="large">
            Özgeçmiş Bilgilerimi Kaydet
          </Button>
        </Form>
      </div>
    </Segment>
  );
}
