import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const AddContact = (props) => {


  const enterDataHandler = (enteredData) => {

    const contactData = {
    id: 10,...enteredData
    };
    props.onAdd(contactData)

    console.log(contactData)

  }

  const cancelHandler = (props) => {


  }

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    width="30%"
    >
    <Typography>Add a new contact</Typography>

      <Form
      onEnterData = {enterDataHandler}
      onCancel = {cancelHandler}
      ></Form>

    </Box>

  );
};

export default AddContact;
