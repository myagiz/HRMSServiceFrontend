import React, { useState } from "react";
import { Formik, Field } from "formik";
import { Form, Segment, Icon, Button } from "semantic-ui-react";
import axios from "axios";

import * as Yup from "yup";

export default function JobSeekerRegister() {
  const url = "http://localhost:8080/api/jobseekers/add";
  const [data, setData] = useState({
    name: "",
    surName: "",
    identificationNumber: "",
    birthday: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function submit(e) {
    e.preventDefault();
    axios
      .post(url, {
        name: "",
        surName: "",
        identificationNumber: "",
        birthday: "",
        email: "",
        password: "",
        passwordRepeat: "",
      })
      .then((result) => {
        console.log(result.data);
      });
  }

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Min. 2 karakter giriniz !")
      .max(50, "Max. 50 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    surName: Yup.string()
      .min(2, "Min. 2 karakter giriniz !")
      .max(50, "Max. 50 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    email: Yup.string()
      .email("Geçersiz email adresi")
      .required("Bu alan boş bırakılamaz !"),
    identificationNumber: Yup.string()
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
    birthday: Yup.date().required("Bu alan boş bırakılamaz !"),
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
          name: "",
          surName: "",
          identificationNumber: "",
          birthday: "",
          email: "",
          password: "",
          passwordRepeat: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            resetForm();
          }, 2000);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleReset,
          dirty,
          touched,
          isSubmitting,
        }) => (
          <Form onSubmit={(e) => submit(e)}>
            <Form.Group widths="equal">
              <Field
                name="name"
                id="name"
                type="text"
                placeholder="Adınızı giriniz"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.name && touched.name ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.name}
                  </b>
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="surName"
                type="text"
                placeholder="Soyadınızı giriniz"
                id="surName"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.surName && touched.surName ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.surName}
                  </b>
                </div>
              ) : null}
            </div>
            <br />
            <Form.Group widths="equal">
              <Field
                name="identificationNumber"
                type="number"
                placeholder="T.C kimlik numaranızı giriniz"
                id="identificationNumber"
              />
            </Form.Group>
            <div align="left">
              {" "}
              {errors.identificationNumber && touched.identificationNumber ? (
                <div style={{ color: "red" }}>
                  <b>
                    <Icon name="warning sign"></Icon>
                    {errors.identificationNumber}
                  </b>{" "}
                </div>
              ) : null}
            </div>
            <br />
            <div align="left">
              <label>Doğum Tarihiniz</label>
            </div>
            <Form.Group widths="equal">
              <Field
                name="birthday"
                type="date"
                placeholder="Doğum tarihinizi giriniz (Gün / Ay / Yıl)"
                id="birthday"
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
                id="email"
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
                id="password"
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
                id="passwordRepeat"
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
