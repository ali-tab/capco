import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const EditContact = (props) => {


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
    </Box>

  );
};

export default EditContact;
