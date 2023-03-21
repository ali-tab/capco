import React, { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, Icon } from "@mui/material";
import { FormControl } from "@mui/material";
import { spacing } from "@mui/system";

const Form = (props) => {
  const [eFname, seteFname] = useState("");
  const [eLname, seteLname] = useState("");
  const [ePhonenum, setePhonenum] = useState("");
  const [eEmail, seteEmail] = useState("");
  const [eAddress, seteAddress] = useState("");

  const {selected} = props;

  useEffect(() => {
    
    seteFname("");
    seteLname("");
    setePhonenum("");
    seteEmail("");
    seteAddress("");

    if (props.add == false){


      seteFname(selected.fName);
      seteLname(selected.lName);
      setePhonenum(selected.phonenum);
      seteEmail(selected.email);
      seteAddress(selected.address);

    }


  }, [selected]);

  const submitHandler = (event) => {
    event.preventDefault();

    const contactData = {
      fName: eFname,
      lName: eLname,
      phonenum: ePhonenum,
      email: eEmail,
      address: eAddress,
    };

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
          value={eFname}
          onChange={fNameChangeHandler}
          type="text"
        />
        <TextField
          required={true}
          id="lastname"
          label="Last name"
          value={eLname}
          onChange={lNameChangeHandler}
          type="text"
        />
        <TextField
          required={true}
          id="phone"
          label="Phone number"
          value={ePhonenum}
          onChange={phoneChangeHandler}
          type="phoneno"
        />
        <TextField
          required={true}
          id="email"
          label="Email"
          type="email"
          value={eEmail}
          onChange={emailChangeHandler}
        />
        <TextField
          required={true}
          id="address"
          label="Address"
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
