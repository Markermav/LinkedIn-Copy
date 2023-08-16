import { Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'
import EmailInput from '../../lib/EmailInput'
import PasswordInput from '../../lib/PasswordInput';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    body: {
      padding: "60px 60px",
    },
    inputBox: {
      width: "300px",
    },
    submitButton: {
      width: "300px",
    },
  }));
  

export default function LoginPage() {
    const history = useHistory()
    const classes = useStyles();

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
      });

      const [inputErrorHandler, setInputErrorHandler] = useState({
        email: {
          error: false,
          message: "",
        },
        password: {
          error: false,
          message: "",
        },
      });


      const handleInputError = (key, status, message) => {
        setInputErrorHandler({
          ...inputErrorHandler,
          [key]: {
            error: status,
            message: message,
          },
        });
      };
    

    const handleLogin = ()=>{
        console.log("submit done")
        console.log(loginDetails.email)
        console.log(loginDetails.password)

        if(loginDetails.password === "password"){
            history.push('/admin')
        }
        else{
            alert("worng password or user")
        }
        

    }

    const handleInput = (key, value) => {
        setLoginDetails({
          ...loginDetails,
          [key]: value,
        });
      };

  return (

    // <>login page</>
    <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >

        <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
         <Grid item>
          <Typography variant="h3" component="h2">
            Admin Login
          </Typography>
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={loginDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            className={classes.inputBox}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={loginDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleLogin()}
            className={classes.submitButton}
          >
            Login
          </Button>
        </Grid> 
      </Grid>
    </Paper>
    </Paper>
    
  )
}
