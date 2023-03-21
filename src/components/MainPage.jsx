import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";


//material UI imports
import { Box, Button, Typography } from "@mui/material";

const DUMMY_DATA = [
  {
    id: 1,
    fName: "Avery",
    lName: "Davis",
    phoneNum: "6213456789",
    email: "adavis123@email.com",
    address: "123 Main St, Anytown USA",
  },
  {
    id: 2,
    fName: "Ethan",
    lName: "Garcia",
    phoneNum: "8685895672",
    email: "egarcia456@gmail.com",
    address: "456 Elm St, Anytown USA",
  },
  {
    id: 3,
    fName: "Aria",
    lName: "Wilson",
    phoneNum: "5349035986",
    email: "awilson567@hotmail.com",
    address: "789 Maple St, Anytown USA",
  },
  {
    id: 4,
    fName: "Luke",
    lName: "Hernandez",
    phoneNum: "8573492760",
    email: "lhernandez890@yahoo.com",
    address: "321 Oak St, Anytown USA",
  },
  {
    id: 5,
    fName: "Natalie",
    lName: "Smith",
    phoneNum: "9834523196",
    email: "nsmith234@hotmail.com",
    address: "567 Pine St, Anytown USA",
  },
  {
    id: 6,
    fName: "Caleb",
    lName: "Lee",
    phoneNum: "7207865491",
    email: "clee345@gmail.com",
    address: "890 Cedar St, Anytown USA",
  },
  {
    id: 7,
    fName: "Hazel",
    lName: "Martinez",
    phoneNum: "6479834052",
    email: "hmartinez901@hotmail.com",
    address: "234 Birch St, Anytown USA",
  },
  {
    id: 8,
    fName: "Owen",
    lName: "Brown",
    phoneNum: "9537124865",
    email: "obrown567@yahoo.com",
    address: "901 Spruce St, Anytown USA",
  },
  {
    id: 9,
    fName: "Aurora",
    lName: "Nguyen",
    phoneNum: "3784569012",
    email: "anguyen234@gmail.com",
    address: "345 Poplar St, Anytown USA",
  },
  {
    id: 10,
    fName: "Wyatt",
    lName: "Taylor",
    phoneNum: "2845098736",
    email: "wtaylor890@hotmail.com",
    address: "123 Main St, Anytown USA",
  },
  {
    id: 11,
    fName: "Addison",
    lName: "Harris",
    phoneNum: "8642739054",
    email: "aharris456@yahoo.com",
    address: "456 Elm St, Anytown USA",
  },
  {
    id: 12,
    fName: "Levi",
    lName: "Clark",
    phoneNum: "6124087593",
    email: "lclark567@gmail.com",
    address: "789 Maple St, Anytown USA",
  },
  {
    id: 13,
    fName: "Scarlett",
    lName: "King",
    phoneNum: "2465807931",
    email: "sking890@hotmail.com",
    address: "321 Oak St, Anytown USA",
  },
  {
    id: 14,
    fName: "Eli",
    lName: "Rivera",
    phoneNum: "5794823061",
    email: "erivera123@gmail.com",
    address: "567 Pine St, Anytown USA",
  },
  {
    id: 15,
    fName: "Julian",
    lName: "Gomez",
    phoneNum: "5037291865",
    email: "jgomez234@hotmail.com",
    address: "890 Cedar St, Anytown USA",
  },
  {
    id: 16,
    fName: "Harper",
    lName: "Ramirez",
    phoneNum: "7498032156",
    email: "hramirez567@gmail.com",
    address: "234 Birch St, Anytown USA",
  },
  {
    id: 17,
    fName: "Isaac",
    lName: "Reyes",
    phoneNum: "9256401873",
    email: "ireyes890@yahoo.com",
    address: "901 Spruce St, Anytown USA",
  },
  {
    id: 18,
    fName: "Violet",
    lName: "Mitchell",
    phoneNum: "2167945308",
    email: "vmitchell123@hotmail.com",
    address: "345 Poplar St, Anytown USA",
  },
  {
    id: 19,
    fName: "Carter",
    lName: "Cooper",
    phoneNum: "3861204957",
    email: "ccooper456@gmail.com",
    address: "123 Main St, Anytown USA",
  },
  {
    id: 20,
    fName: "Lila",
    lName: "Torres",
    phoneNum: "6824091375",
    email: "ltorres567@yahoo.com",
    address: "456 Elm St, Anytown USA",
  },
];
function MainPage() {
  //contacts state
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
    existingContact.phoneNum = contact.phoneNum;
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

  const cancelHandler = () => {
    setMode("n");
  };

  return (
    <Box justifyContent="center" alignItems="center">
      <Typography
        sx={{ p: 5, bgcolor: "info.main" }}
        variant="h3"
        fontFamily="DM Sans"
      >
        Contacts
      </Typography>
      <Box
        display="flex"
        sx={{ p: 0, height: 830 }}
        justifyContent="center"
        alignItems="center"
      >
        {mode == "n" && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="30%"
          >
            <Button
              style={{ fontSize: "25px" }}
              variant="outlined"
              size="large"
              onClick={addPressed}
            >
              ADD NEW CONTACT
            </Button>
          </Box>
        )}

        {mode === "a" && (
          <AddContact
            size={contacts.length + 1}
            onAdd={addHandler}
            cancelAdd={cancelHandler}
          ></AddContact>
        )}
        {mode === "d" && (
          <DeleteContact
            onDelete={deleteHandler}
            cancelDelete={cancelHandler}
          ></DeleteContact>
        )}
        {mode === "e" && (
          <EditContact
            selected={contacts[selectedContact]}
            onSave={editHandler}
            cancelEdit={cancelHandler}
          ></EditContact>
        )}

        <ContactList
          rows={contacts}
          onDelete={deletePressed}
          onEdit={editPressed}
        ></ContactList>
      </Box>
    </Box>
  );
}

export default MainPage;
