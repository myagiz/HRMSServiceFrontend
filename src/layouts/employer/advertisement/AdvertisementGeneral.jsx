import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Segment, Form, TextArea, Input, Icon } from "semantic-ui-react";

export default function AdvertisementGeneral() {
  const SignupSchema = Yup.object().shape({
    jobInformation: Yup.string()
      .min(10, "Min. 10 karakter giriniz !")
      .max(1000, "Max. 1000 karakter giriniz !")
      .required("Bu alan boş bırakılamaz !"),
    numberOfOpenPositions: Yup.number().required("Bu alan boş bırakılamaz !"),
    salaryScaleMin: Yup.number().required("Bu alan boş bırakılamaz !"),
    salaryScaleMax: Yup.number().required("Bu alan boş bırakılamaz !"),
    releaseDate: Yup.string().required("Bu alan boş bırakılamaz !"),
    applicationDeadline: Yup.string().required("Bu alan boş bırakılamaz !"),
  });
  return (
    <div>
      <Segment color="violet">
        <h5>Genel Bilgiler</h5>
        <Formik
          initialValues={{
            jobInformation: "",
            numberOfOpenPositions: "",
            salaryScaleMin: "",
            salaryScaleMax: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="jobInformation"
                control={TextArea}
                placeholder="İş Hakkında Genel Bilgileriniz..."
              />
              <div align="left">
                {" "}
                {errors.jobInformation && touched.jobInformation ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.jobInformation}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />
              <Field
                name="numberOfOpenPositions"
                control={Input}
                placeholder="Açık Pozisyon Sayısı"
                type="number"
              />
              <div align="left">
                {" "}
                {errors.numberOfOpenPositions &&
                touched.numberOfOpenPositions ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.numberOfOpenPositions}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />

              <Field
                name="salaryScaleMin"
                control={Input}
                placeholder="Minimum Maaş Tutarı"
                type="number"
              />
              <div align="left">
                {" "}
                {errors.salaryScaleMin && touched.salaryScaleMin ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.salaryScaleMin}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />
              <Field
                name="salaryScaleMax"
                control={Input}
                placeholder="Maksimum Maaş Tutarı"
                type="number"
              />
              <div align="left">
                {" "}
                {errors.salaryScaleMax && touched.salaryScaleMax ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.salaryScaleMax}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />
              <label><b>İlan Yayınlama Tarihi</b> </label>
              <Field
                name="releaseDate"
                control={Input}
                placeholder="İlan Yayınlama Tarihi"
                type="date"
              />
              <div align="left">
                {" "}
                {errors.releaseDate && touched.releaseDate ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.releaseDate}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />
              <label><b>İlan Sona Erme Tarihi</b> </label>
              <Field
                name="applicationDeadline"
                control={Input}
                placeholder="İlan Sona Erme Tarihi"
                type="date"
              />
              <div align="left">
                {" "}
                {errors.applicationDeadline && touched.applicationDeadline ? (
                  <div style={{ color: "red" }}>
                    <b>
                      <Icon name="warning sign"></Icon>
                      {errors.applicationDeadline}
                    </b>
                  </div>
                ) : null}
              </div>
              <br />
            </Form>
          )}
        </Formik>
      </Segment>
      <br />
    </div>
  );
}
