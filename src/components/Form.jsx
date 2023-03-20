import * as React from "react";
import { Box, Button, Typography, TextField, Icon } from "@mui/material";
import { FormControl } from "@mui/material";

const Form = (props) => {

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2vh"
    >
      <FormControl>
        <TextField
          required={true}
          id="firstname"
          label="First name"
          defaultValue={props.fname}
        />
        <TextField
          required={true}
          id="lastname"
          label="Last name"
          defaultValue={props.lname}
        />
        <TextField
          required={true}
          id="phone"
          label="Phone number"
          defaultValue={props.phonenum}
        />
        <TextField
          required={true}
          id="email"
          label="Email"
          defaultValue={props.email}
        />
        <TextField
          required={true}
          id="address"
          label="Address"
          defaultValue={props.address}
        />
      </FormControl>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        gap="2vh"
      >
      </Box>
      <Button onClick = {props.submitHandler} variant="contained" color="primary">Submit</Button>
      <Button variant="contained" color="primary">Cancel</Button>
    </Box>
  );
};

export default Form;
