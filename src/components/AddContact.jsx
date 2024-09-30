import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

//give an id to added contact, then add it to the rest of the contacts
const AddContact = (props) => {
  const enterDataHandler = (enteredData) => {
    const contactData = {
      id: props.nextID,
      ...enteredData,
    };
    props.onAdd(contactData);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography variant="h4">Add a new contact</Typography>
      {/*get cancel from MainPage*/}
      {/*get selected contact from MainPage*/}
      {/*pass to form*/}
      {/*let form know we are adding a contact so it will not try to fill text fields*/}

      <Form
        onEnterData={enterDataHandler}
        onCancel={props.cancelAdd}
        add={true}
        selected={props.selected}
      ></Form>
    </Box>
  );
};

export default AddContact;
