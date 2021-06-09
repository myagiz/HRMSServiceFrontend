import React from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import CVGeneral from "./CV/CVGeneral";
import CVSchool from "./CV/CVSchool";
import CVWorkplace from "./CV/CVWorkplace";
import CVLanguage from "./CV/CVLanguage";

export default function JobSeekerCreateCVForm() {
  return (
    <Segment>
      <div align="left">
        <h3>Özgeçmiş Oluştur</h3>
      </div>
      <br />
      <div align="left">
        <Form>
          <CVGeneral></CVGeneral>
          <CVSchool></CVSchool>
          <CVWorkplace></CVWorkplace>
          <CVLanguage></CVLanguage>
          <br />
          <Button positive attached="bottom" size="large">
            Özgeçmiş Bilgilerimi Kaydet
          </Button>
        </Form>
      </div>
    </Segment>
  );
}
