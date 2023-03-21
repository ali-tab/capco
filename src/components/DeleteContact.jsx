import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import Form from "./Form";

const DeleteContact = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography>Are you sure you want to delete this contact?</Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        width="30%"
      >
        <Button variant="contained" color="primary" onClick={props.onDelete}>
          Yes
        </Button>
        <Button onClick={props.onCancel} variant="contained" color="primary">
          No
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteContact;
