import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "phone number",
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
    renderCell:(cellValues)=>{
      console.log(cellValues)
      return(
        <Button>Edit</Button>
      )

    }
  },
  {
    field: "delete",
    headerName: "",
    renderCell:(cellValues)=>{
      console.log(cellValues)
      return(
        <Button>Delete</Button>
      )

    }
  }
];

const ContactList = (props) => {

  console.log(props);

  return (
    <DataGrid
      rows={props.rows}
      columns={columns}
      pageSize={5}
      autoHeight={true}
      //hide the ID
      checkboxSelection={false}
      columnVisibilityModel={{ id: false }}
      disableRowSelectionOnClick = {true}
    />
  );
};

export default ContactList;