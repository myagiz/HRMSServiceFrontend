import React, { useEffect, useState } from "react";
import { Segment, List } from "semantic-ui-react";
import EmployerService from "../services/employerService";

export default function StaffEmployer() {

const [employers, setEmployers] = useState([],)

useEffect(()=>{
    let employerService=new EmployerService()
    employerService.
})

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
            <List.Item>
              <List.Icon name="github" size="large" verticalAlign="middle" />
              <List.Content>
                <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
                <List.Description as="a">Updated 10 mins ago</List.Description>
              </List.Content>
            </List.Item>
          </List>
        </div>
      </Segment>
    </div>
  );
}
