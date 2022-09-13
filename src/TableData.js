import React from 'react'
import { Table } from "react-bootstrap"; 

function TableData({ data }) {
  console.log(data);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data?data.map((val, ind) => {
          return(
        <tr key={ind}>
          <td>{ind + 1}</td>
          <td>{val.email}</td>
          <td>{val.password}</td>
        </tr>
          )
        }):'null'}
      </tbody>
    </Table>
  );
}

export default TableData