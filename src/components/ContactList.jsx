//ContactList component for displaying a given feed of contact data

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";

const ContactList = (props) => {
  //identify fields for MUI datagrid
  const columns = [
    { field: "id", headerName: "ID", width: 70, type: "fName" },
    { field: "fName", headerName: "First name", width: 130 },
    { field: "lName", headerName: "Last name", width: 130 },
    {
      field: "phoneNum",
      headerName: "Phone Number",
      type: "phonenumber",
      width: 130,

      //formatting each phone number per row
      renderCell: (cellValues) => {
        let numberarr = cellValues.row.phoneNum;

        //formatting to be phone number. slice and create sets of digits like "000 000 0000"
        const sliced1 = numberarr.slice(0, 3);
        const sliced2 = numberarr.slice(3, 6);
        const sliced3 = numberarr.slice(6, 10);

        //add formatting
        const newArr = "(" + sliced1 + ") " + sliced2 + " - " + sliced3;

        return newArr;
      },
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 230,
    },
    {
      field: "address",
      headerName: "Address",
      type: "address",
      width: 230,
    },
    {
      field: "edit",
      headerName: "",
      //adding an edit button to every contact row, disabling filter/menu features for that column
      renderCell: (cellValues) => {
        return (
          <Button
            onClick={(e) => {
              props.onEdit(e, cellValues.row.id);
            }}
          >
            Edit
          </Button>
        );
      },
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "delete",
      headerName: "",
      //adding a delete button to every contact row, disabling filter/menu features for that column
      renderCell: (cellValues) => {
        return (
          <Button
            onClick={(e) => {
              props.onDelete(e, cellValues.row.id);
            }}
          >
            Delete
          </Button>
        );
      },
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
  ];

  return (
    <DataGrid
      rows={props.rows}
      columns={columns}
      pageSize={5}
      checkboxSelection={false}
      columnVisibilityModel={{ id: false }}
      //hide the ID
      disableRowSelectionOnClick={true}
    />
  );
};

export default ContactList;
