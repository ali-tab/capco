import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";

//material UI imports
import { Box, Button } from "@mui/material";

const DUMMY_DATA = [
  { id: 1, fName: "Jon", lName: "Snow", address: "392 Locust Street" },
  { id: 2, fName: "Cersei", lName: "Lannister" },
  { id: 3, fName: "Jaime", lName: "Lannister", email: "test@test.com" },
  { id: 4, fName: "Arya", lName: "Stark" },
  { id: 5, fName: "Daenerys", lName: "Targaryen" },
  { id: 6, fName: "Michael", lName: "Melisandre" },
  { id: 7, fName: "Ferrara", lName: "Clifford" },
  { id: 8, fName: "Rossini", lName: "Frances" },
  { id: 9, fName: "Harvey", lName: "Roxie" },
];

function MainPage() {
  const [contacts, setContacts] = React.useState(DUMMY_DATA);

  const [mode, setMode] = React.useState("n");

  const [selectedContact, setSelected] = React.useState(-1);

  const addPressed = (params) => {
    setMode("a");
  };

  const addHandler = (contact) => {
    setContacts((prevContacts) => {
      return [contact, ...prevContacts];
    });
  };

  const editPressed = (e, id) => {
    setMode("e");
    e.stopPropagation();
    let newList = [...contacts];
    let found = newList.findIndex((o) => o.id == id);
    setSelected(found);
  };

  const editHandler = (contact) => {
    let newList = [...contacts];
    // let existingContact = newList.find((o) => o.id == selectedContact);
    // let existingContactIndex = newList.find((o) => o.id == selectedContact);

    let existingContact = newList[selectedContact];

    existingContact.fName = contact.fName;
    existingContact.lName = contact.lName;
    existingContact.phonenum = contact.phonenum;
    existingContact.email = contact.email;
    existingContact.address = contact.address;
    newList[selectedContact] = existingContact;

    console.log(newList);
    setContacts(newList);
  };

  const deletePressed = (e, id) => {
    setMode("d");
    e.stopPropagation();
    let newList = [...contacts];
    let found = newList.findIndex((o) => o.id == id);
    setSelected(found);
  };

  const deleteHandler = () => {
    setContacts((prevContacts) => {
      let newList = [...prevContacts];

      newList.splice(selectedContact, 1);

      setMode("n");

      return newList;
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
          <Button variant="outlined" size="large" onClick={addPressed}>
            Add new contact
          </Button>
        </Box>
      )}

      {mode === "a" && (
        <AddContact size={contacts.length+1} onAdd={addHandler}></AddContact>
      )}
      {mode === "d" && <DeleteContact onDelete={deleteHandler}></DeleteContact>}
      {mode === "e" && (
        <EditContact
          selected={contacts[selectedContact]}
          onSave={editHandler} /*onCancel={cancelHandler}*/
        ></EditContact>
      )}

      <ContactList
        rows={contacts}
        onDelete={deletePressed}
        onEdit={editPressed}
      ></ContactList>
    </Box>
  );
}

export default MainPage;
