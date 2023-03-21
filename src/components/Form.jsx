//form component shared by AddContact and EditContact

import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, Icon } from "@mui/material";
import { FormControl } from "@mui/material";
import { spacing } from "@mui/system";

const Form = (props) => {
  //set states for all data
  const [eFname, seteFname] = useState("");
  const [eLname, seteLname] = useState("");
  const [ePhonenum, setePhonenum] = useState("");
  const [eEmail, seteEmail] = useState("");
  const [eAddress, seteAddress] = useState("");

  const { selected } = props;

  //clear the textfields
  useEffect(() => {
    seteFname("");
    seteLname("");
    setePhonenum("");
    seteEmail("");
    seteAddress("");

    //if editing (not in add mode), force selected data to appear in textfields.
    if (props.add == false) {
      seteFname(selected.fName);
      seteLname(selected.lName);
      setePhonenum(selected.phoneNum);
      seteEmail(selected.email);
      seteAddress(selected.address);
    }
  }, [selected]);

  //on submission of form
  const submitHandler = (event) => {
    //prevent default submit
    event.preventDefault();

    //set the values from textfields
    const contactData = {
      fName: eFname,
      lName: eLname,
      phoneNum: ePhonenum,
      email: eEmail,
      address: eAddress,
    };

    //enter data with a function depending on either if AddContact or EditContact is being used
    props.onEnterData(contactData);

    //clear data
    seteFname("");
    seteLname("");
    setePhonenum("");
    seteEmail("");
    seteAddress("");
  };

  //textfield change handlers
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
      sx={{ m: 4 }}
    >
      {/*submitHandler called here*/}
      <form onSubmit={submitHandler}>
        <TextField
          required={true}
          id="firstname"
          label="First name"
          value={eFname}
          onChange={fNameChangeHandler}
          type="text"
          sx={{ m: 1 }}
        />
        <TextField
          required={true}
          id="lastname"
          label="Last name"
          value={eLname}
          onChange={lNameChangeHandler}
          type="text"
          sx={{ m: 1 }}
        />
        <TextField
          required={true}
          id="phone"
          label="Phone number"
          value={ePhonenum}
          onChange={phoneChangeHandler}
          sx={{ m: 1 }}
          inputProps={{ inputMode: "numeric", minLength: 10, maxLength: 10 }}
        />
        <TextField
          required={true}
          id="email"
          label="Email"
          type="email"
          value={eEmail}
          onChange={emailChangeHandler}
          sx={{ m: 1 }}
        />
        <TextField
          required={true}
          id="address"
          label="Address"
          value={eAddress}
          onChange={addressChangeHandler}
          sx={{ m: 1 }}
        />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          gap="2vh"
        ></Box>
        <Button sx={{ m: 1 }} type="submit" variant="contained" color="primary">
          Submit
        </Button>
        <Button
          sx={{ m: 1 }}
          onClick={props.onCancel}
          variant="contained"
          color="primary"
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default Form;
