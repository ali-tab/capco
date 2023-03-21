//DeleteContact component

import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";

const DeleteContact = (props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="30%"
    >
      <Typography variant="h4" sx={{ p: 4 }}>
        Are you sure you want to delete this contact?
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        width="30%"
      >
        {/*delete contact data stored in the main page component*/}
        <Button
          sx={{ m: 1 }}
          variant="contained"
          color="primary"
          onClick={props.onDelete}
          style={{ fontSize: "15px" }}
        >
          Yes
        </Button>
        {/*get cancel from MainPage*/}
        <Button
          sx={{ m: 1 }}
          onClick={props.cancelDelete}
          variant="contained"
          color="primary"
          style={{ fontSize: "15px" }}
        >
          No
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteContact;
