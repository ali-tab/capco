import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const EditContact = (props) => {
  const enterDataHandler = (enteredData) => {
    console.log(enteredData);

    props.onSave(enteredData);
  };

  const cancelHandler = (props) => {
    props.onCancel();

  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography>Edit contact</Typography>

      <Form onEnterData={enterDataHandler} add={false} selected={props.selected} ></Form>
    </Box>
  );
};

export default EditContact;
