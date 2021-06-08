import React, { useEffect, useState } from "react";
import { Segment, List } from "semantic-ui-react";
import EmployerService from "../../services/employerService";

export default function StaffEmployer() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllEmployers()
      .then((result) => setEmployers(result.data.data));
  });

  return (
    <div>
      <br />
      <Segment color="red">
        <div align="left">
          <h3>İşverenler Yönetimi</h3>
        </div>
        <br />
        <div align="left">
          <List divided relaxed>
            {employers.map((employer) => (
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
                    {employer.companyName} / {employer.email} /{" "}
                    {employer.phoneNumber}
                  </List.Header>
                  <List.Description as="a">{employer.website}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    </div>
  );
}
