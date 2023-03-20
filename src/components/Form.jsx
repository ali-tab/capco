import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Typography, TextField } from "@mui/material";
import PhoneInput from 'react-phone-input-2';

const Form = (props) => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    gap="2vh"
    >
      <TextField
        required
        id="firstname"
        label="First name"
      />
        <TextField
        required
        id="lastname"
        label="Last name"

      />
        <TextField
        required
        id="phone"
        label="Phone number"

      />
              <TextField
        required
        id="email"
        label="Email"

      />
              <TextField
        required
        id="address"
        label="Address"

      />

      <Button>
        Save
      </Button>
    </Box>
  );
};

export default Form;