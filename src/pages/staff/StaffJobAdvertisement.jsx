import React, { useEffect, useState } from "react";
import { Segment, List } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function StaffJobAdvertisement() {
  const [jobAdvertisements, setjobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllJobAdvertisement()
      .then((result) => setjobAdvertisements(result.data.data));
  });

  return (
    <div>
      <br />
      <Segment color="orange">
        <div align="left">
          <h3>İş İlanları Yönetimi</h3>
        </div>
        <br />
        <div align="left">
          <List divided relaxed>
            {jobAdvertisements.map((jobAdvertisement) => (
              <List.Item>
                <List.Icon
                  name="edit"
                  color="green"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Icon
                  name="delete"
                  color="red"
                  size="large"
                  verticalAlign="middle"
                />
                <List.Content>
                  <List.Header as="a">
                    {jobAdvertisement.jobPosition.jobName} /{" "}
                    {jobAdvertisement.employer.companyName}- {" "}
                    {jobAdvertisement.employer.email} {" "}-
                    {jobAdvertisement.employer.phoneNumber} / 
                    {jobAdvertisement.salaryScaleMin}-
                    {jobAdvertisement.salaryScaleMax} TL / {" "}
                    {jobAdvertisement.city.cityName} / Son Başvuru :{" "}
                    {jobAdvertisement.applicationDeadline}
                  </List.Header>
                  <List.Description as="a">
                    {jobAdvertisement.jobInformation}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    </div>
  );
}
