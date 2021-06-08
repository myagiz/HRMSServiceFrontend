import React, { useEffect, useState } from "react";
import { Segment, List } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";

export default function StaffJobSeeker() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getAllJobSeekers()
      .then((result) => setJobSeekers(result.data.data));
  });

  return (
    <div>
      <br />
      <Segment color="green">
        <div align="left">
          <h3>İş Arayanlar Yönetimi</h3>
        </div>
        <br />
        <div align="left">
          <List divided relaxed>
            {jobSeekers.map((jobSeeker) => (
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
                    {jobSeeker.name} {jobSeeker.surName} /{" "}
                    {jobSeeker.identificationNumber} / {jobSeeker.birtday}
                  </List.Header>
                  <List.Description as="a">{jobSeeker.email}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    </div>
  );
}
