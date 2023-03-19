import React, { useState } from "react";
import ContactList from "./components/ContactList";
import "./App.css";

//material UI imports
import { Box, Button } from "@mui/material";

const DUMMY_DATA = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 22 },
  { id: 6, lastName: "Melisandre", firstName: "Michael", age: 56 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function App() {
  const [contacts] = React.useState(DUMMY_DATA);

  return (
    <div className="App">
      <Box display="flex">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="10%"
          width="30%"
        >
          <Button variant="outlined" size="large">
            Add
          </Button>
          <Button variant="outlined" size="large">
            Edit
          </Button>
          <Button variant="outlined" size="large">
            Delete
          </Button>
        </Box>

        <ContactList rows={contacts}></ContactList>
      </Box>
    </div>
  );
}

export default App;
