import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const EditContact = (props) => {
  const enterDataHandler = (enteredData) => {
    console.log(enteredData);

    props.onSave(enteredData);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography variant="h4">Edit contact</Typography>

      <Form onEnterData={enterDataHandler} onCancel={props.cancelEdit} add={false} selected={props.selected} ></Form>
    </Box>
  );
};

export default EditContact;
