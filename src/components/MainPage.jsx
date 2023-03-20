import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

//material UI imports
import { Box, Button } from "@mui/material";

const DUMMY_DATA = [
  { id: 1,    fName: "Jon", age: 35,     lName: "Snow",          address: "392 Locust Street" },
  { id: 2,  fName: "Cersei", age: 42   ,   lName: "Lannister",                   },
  { id: 3, fName: "Jaime", age: 45     ,   lName: "Lannister",                  },
  { id: 4,  fName: "Arya", age: 16     ,   lName: "Stark",                           },
  { id: 5,  fName: "Daenerys", age: 22 ,   lName: "Targaryen",                   },
  { id: 6, fName: "Michael", age: 56   ,   lName: "Melisandre",                },
  { id: 7, fName: "Ferrara", age: 44   ,   lName: "Clifford",                    },
  { id: 8,  fName: "Rossini", age: 36  ,     lName: "Frances",                      },
  { id: 9,  fName: "Harvey", age: 65   ,     lName: "Roxie",                         },
];  

function MainPage() {

  const [contacts, setContacts] = React.useState(DUMMY_DATA);

  const [mode, setMode] = React.useState("n");

  const handleAdd = (params) => {
    setMode("a");
  };

  const handleEdit = (params) => {
    setMode("e");
  };

  const handleDelete = (params) => {
    setMode("d");
  };

  const addHandler = (contact) => {
    setContacts((prevContacts) => {
      return [contact, ...prevContacts];
    });
  };

  return (
    <Box display="flex">
      {mode == "n" && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10%"
          width="30%"
        >
          <Button variant="outlined" size="large" onClick={handleAdd}>
            Add new contact
          </Button>
        </Box>
      )}

      {mode === "a" && <AddContact onAdd={addHandler}></AddContact>}

      <ContactList rows={contacts}></ContactList>
    </Box>
  );
}

export default MainPage;
