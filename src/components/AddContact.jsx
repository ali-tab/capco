import * as React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";
import ContactList from "./ContactList";

const AddContact = (props) => {

  const submit = (

    console.log("hello")

  )

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2vh"
      width="30%"
    >
      <Form
      submitHandler = {submit}
      ></Form>
    </Box>
  );
};

export default AddContact;
