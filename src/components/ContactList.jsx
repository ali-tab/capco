import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";


const ContactList = (props) => {

const columns = [
  { field: "id", headerName: "ID", width: 70, type: "fName" },
  { field: "fName", headerName: "First name", width: 130, },
  { field: "lName", headerName: "Last name", width: 130 },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "phonenumber",
    width: 130,
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 130,
  },
  {
    field: "address",
    headerName: "Address",
    type: "address",
    width: 130,
  },
  {
    field: "edit",
    headerName: "",
    renderCell: (cellValues) => {
      return <Button onClick= {(e)=> {props.onEdit(e, cellValues.row.id)} }>Edit</Button>;
    },
  },
  {
    field: "delete",
    headerName: "",
    renderCell: (cellValues) => {
      return <Button onClick= {(e)=> {props.onDelete(e, cellValues.row.id)} }>Delete</Button>;
    },
  },
];

  return (
    <DataGrid
      rows={props.rows}
      columns={columns}
      pageSize={5}
      autoHeight={true}
      //hide the ID
      checkboxSelection={false}
      columnVisibilityModel={{ id: false }}
      disableRowSelectionOnClick={true}
    />
  );
};

export default ContactList;
