import React from 'react';
import axios from 'axios';

let date = new Date();
const dd = date.getDate();
const mm = date.getMonth() + 1;
const yyyy = date.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

let today = mm + '/' + dd + '/' + yyyy;


const ResearchUser = () => {
    return(
        <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Location</th>
      <th scope="col">Request Data</th>
      <th scope="col">Date Requested</th>
      <th scope="col">Approved?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">M1: Oletta River</th>
      <td>Click Here</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">M2: Boca Raton</th>
      <td>Click Here</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">M3: South Beach</th>
      <td>Click Here</td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    )
}

export default ResearchUser;

// <Table celled>
/* <Table.Header striped>
<Table.Row>
    <Table.HeaderCell>Location</Table.HeaderCell>
    <Table.HeaderCell>Request Data</Table.HeaderCell>
    <Table.HeaderCell>Date Requested</Table.HeaderCell>
    <Table.HeaderCell>Approved</Table.HeaderCell>
</Table.Row>
</Table.Header>

<Table.Body>
<Table.Row>
    <Table.Cell>M1: Oletta River</Table.Cell>
    <Table.Cell>Click Here</Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
</Table.Row>
<Table.Row>
    <Table.Cell>M2: Boca Raton</Table.Cell>
    <Table.Cell>Click Here</Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
</Table.Row>
<Table.Row>
    <Table.Cell>M3: South Beach</Table.Cell>
    <Table.Cell>Click Here</Table.Cell>
    <Table.Cell></Table.Cell>
    <Table.Cell></Table.Cell>
</Table.Row>
</Table.Body>
</Table> */