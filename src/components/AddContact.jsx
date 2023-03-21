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

  const cancelHandler = (props) => {

    //props.onCancel();
    console.log("cancel")

  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography>Add a new contact</Typography>

      <Form onEnterData={enterDataHandler} onCancel={cancelHandler} add={true} selected={props.selected}> mode={props.mode} </Form>
    </Box>
  );
};

export default AddContact;
