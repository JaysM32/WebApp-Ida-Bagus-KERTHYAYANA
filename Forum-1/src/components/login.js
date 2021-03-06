import React from 'react';
import {Grid,  Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login=()=>{

  const paperStyle ={padding: 20, height:'70vh', width:280, margin:"20px auto"}
  const avatarStyle ={backgroundColor:'lightgreen'}
  const btnstyle={margin:'15px 0'}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder="Enter Username" fullwidth required/>
        <TextField label='Password' placeholder="Enter Password" type='Password'fullwidth required/>
        <FormControlLabel control={ <Checkbox name="checkedB" color="primary"/>} label="Remember me"/>
        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
        <Typography >
          <Link href="#" > Forgot password ?</Link>
        </Typography>
        <Typography > Do you have an account ?
          <Link href="#" > Sign Up </Link>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Login
