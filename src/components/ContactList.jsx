import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";

const ContactList = (props) => {

const columns = [
  { field: "id", headerName: "ID", width: 70, type: "fName" },
  { field: "fName", headerName: "First name", width: 130, },
  { field: "lName", headerName: "Last name", width: 130 },
  {
    field: "phoneNum",
    headerName: "Phone Number",
    type: "phonenumber",
    width: 130,
    renderCell: (cellValues) => {

      let numberarr = cellValues.row.phoneNum;
      
      const sliced1 = numberarr.slice(0, 3);
      const sliced2 = numberarr.slice(3, 6);
      const sliced3 = numberarr.slice(6, 10);

      const newArr = "(" + sliced1 + ") " + sliced2 + " - " + sliced3;

      return newArr;
    },
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
      //hide the ID
      checkboxSelection={false}
      columnVisibilityModel={{ id: false }}
      disableRowSelectionOnClick={true}
    />
  );
};

export default ContactList;
