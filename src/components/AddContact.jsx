import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const AddContact = (props) => {
  const enterDataHandler = (enteredData) => {
    const contactData = {
      id: props.size,
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
      <Typography         variant="h4">Add a new contact</Typography>

      <Form onEnterData={enterDataHandler} onCancel={props.cancelAdd} add={true} selected={props.selected}> </Form>
    </Box>
  );
};

export default AddContact;
