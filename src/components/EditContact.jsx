//EditContact component

import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

//call save edited contact method from MainPage to update data
const EditContact = (props) => {
  const enterDataHandler = (enteredData) => {
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
      {/*get cancel from MainPage*/}
      {/*get selected contact from MainPage*/}
      {/*pass to form*/}
      {/*let form know we are editing a contact (not adding) so it will fill text fields with existing contact data*/}
      <Form
        onEnterData={enterDataHandler}
        onCancel={props.cancelEdit}
        add={false}
        selected={props.selected}
      ></Form>
    </Box>
  );
};

export default EditContact;
