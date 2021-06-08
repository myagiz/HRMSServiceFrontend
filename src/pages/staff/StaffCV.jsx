import React, { useEffect, useState } from "react";
import { Segment, List } from "semantic-ui-react";
import CVService from "../../services/CVService";

export default function StaffCV() {
  const [cvs, setCvs] = useState([]);

  useEffect(() => {
    let cvService = new CVService();
    cvService.getAllCV().then((result) => setCvs(result.data.data));
  });

  return (
    <div>
      <br />
      <Segment color="pink">
        <div align="left">
          <h3>Özgeçmiş Yönetimi</h3>
        </div>
        <br />
        <div align="left">
          <List divided relaxed>
            {cvs.map((cv) => (
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
                    {cv.jobSeeker.name} {cv.jobSeeker.surName}  / {cv.github} / {cv.linkedin}
                  </List.Header>
                  <List.Description as="a">{cv.coverLetter}</List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </div>
      </Segment>
    </div>
  );
}
