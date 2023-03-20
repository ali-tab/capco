import React, { useState } from "react";
import { Box, Button, Typography, TextField, Icon } from "@mui/material";
import { FormControl } from "@mui/material";
import { spacing } from "@mui/system";

const Form = (props) => {

  const [eFname, seteFname] = useState("");
  const [eLname, seteLname] = useState("");
  const [ePhonenum, setePhonenum] = useState("");
  const [eEmail, seteEmail] = useState("");
  const [eAddress, seteAddress] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const contactData = {
      fName: eFname,
      lName: eLname,
      phonenum: ePhonenum,
      email: eEmail,
      address: eAddress,
    };

    console.log(contactData)

    props.onEnterData(contactData);
    seteFname("");
    seteLname("");
    setePhonenum("");
    seteEmail("");
    seteAddress("");
  };


  const fNameChangeHandler = (event) => {
    seteFname(event.target.value);
  };

  const lNameChangeHandler = (event) => {
    seteLname(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setePhonenum(event.target.value);
  };

  const emailChangeHandler = (event) => {
    seteEmail(event.target.value);
  };

  const addressChangeHandler = (event) => {
    seteAddress(event.target.value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <form onSubmit={submitHandler}>
        <TextField
          required={true}
          id="firstname"
          label="First name"
          defaultValue={props.fname}
          value={eFname}
          onChange={fNameChangeHandler}
          type="text"
        />
        <TextField
          required={true}
          id="lastname"
          label="Last name"
          defaultValue={props.lname}
          value={eLname}
          onChange={lNameChangeHandler}
          type="text"
        />
        <TextField
          required={true}
          id="phone"
          label="Phone number"
          defaultValue={props.phonenum}
          value={ePhonenum}
          onChange={phoneChangeHandler}
          type="phoneno"
        />
        <TextField
          required={true}
          id="email"
          label="Email"
          type="email"
          defaultValue={props.email}
          value={eEmail}
          onChange={emailChangeHandler}
        />
        <TextField
          required={true}
          id="address"
          label="Address"
          defaultValue={props.address}
          value={eAddress}
          onChange={addressChangeHandler}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          gap="2vh"
        ></Box>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button onClick={props.onCancel} variant="contained" color="primary">
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default Form;
