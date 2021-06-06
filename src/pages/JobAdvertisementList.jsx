import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Button } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementList() {

   const [jobAdvertisements, setJobAdvertisements] = useState([],)

   useEffect(()=>{
       let jobAdvertisementService=new JobAdvertisementService()
       jobAdvertisementService.getAllJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
   })

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Firma Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>İlan Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İlan Durumu</Table.HeaderCell>
            <Table.HeaderCell>İşlemler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobPosition.jobName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.releaseDate}</Table.Cell>
              <Table.Cell>{jobAdvertisement.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvertisement.isActive}</Table.Cell>
              <Table.Cell>İlan Görüntüle</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
