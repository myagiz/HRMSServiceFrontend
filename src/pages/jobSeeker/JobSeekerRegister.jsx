import React from "react";
import { Formik, Field } from "formik";
import { Form, Segment, Icon, Button} from "semantic-ui-react";

import * as Yup from "yup";

export default function JobSeekerRegister() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Min. 2 karakter giriniz !")
      .max(50, "Max. 50 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    lastName: Yup.string()
      .min(2, "Min. 2 karakter giriniz !")
      .max(50, "Max. 50 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    email: Yup.string()
      .email("Geçersiz email adresi")
      .required("Bu alan boş bırakılamaz !"),
    identityNumber: Yup.string()
      .min(11, "11 karakter giriniz !")
      .max(11, "11 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    password: Yup.string()
      .min(6, "Min. 6 karakter giriniz !")
      .max(30, "Max 30 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    passwordRepeat: Yup.string()
      .min(6, "Min. 6 karakter giriniz !")
      .max(50, "Max. 50 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
  });

  return (
    <Segment color="violet" padded>
      <br />
      <div>
        <h2>
          <Icon name="signup"></Icon> İş Arayan HRMS Kayıt Formu
        </h2>
      </div>
      <br />

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          identityNumber: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Form.Group widths="equal">
              <Field
                name="firstName"
                type="text"
                placeholder="Adınızı giriniz"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.firstName && touched.firstName ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.firstName}
                  </b>
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="lastName"
                type="text"
                placeholder="Soyadınızı giriniz"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.lastName && touched.lastName ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.lastName}
                  </b>
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="identityNumber"
                type="number"
                placeholder="T.C kimlik numaranızı giriniz"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.identityNumber && touched.identityNumber ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.identityNumber}
                  </b>{" "}
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="birthday"
                type="text"
                placeholder="Doğum tarihinizi giriniz (Gün / Ay / Yıl)"
              />
            </Form.Group>
            <div align="left">
              {errors.birthday && touched.birthday ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.birthday}
                  </b>{" "}
                </div>
              ) : null}
              <br />
            </div>
            <Form.Group widths="equal">
              <Field
                name="email"
                type="email"
                placeholder="Email adresinizi giriniz"
              />
            </Form.Group>
            <div align="left">
              {errors.email && touched.email ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.email}
                  </b>{" "}
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="password"
                type="password"
                placeholder="Şifrenizi giriniz"
              />
            </Form.Group>
            <div align="left">
              {errors.password && touched.password ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.password}
                  </b>{" "}
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="passwordRepeat"
                type="password"
                placeholder="Şifrenizi tekrar giriniz"
              />
            </Form.Group>
            <div align="left">
              {errors.passwordRepeat && touched.passwordRepeat ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.passwordRepeat}
                  </b>{" "}
                </div>
              ) : null}
            </div>
            <br />
            <Button positive attached="bottom" type="submit">
              İş Arayan Kayıt Formunu Gönderiniz
            </Button>
          </Form>
        )}
      </Formik>
    </Segment>
  );
}
