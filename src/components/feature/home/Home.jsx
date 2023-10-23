import React, {useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Home.css'

const textField = {
    margin: '5px'
}

const emailId = {
    margin: '5px',
    width: '455px'
}

const Home = () =>{
    const [gender, setGender] = React.useState('');
    const handleChange = (event) => {
        setGender(event.target.value);
    };
    return(
        <div className="home-page">
            <div className="home-line-1">
                <h1 className="create-account">Create Account with us</h1>
                <div className="acc-open">
                    <div className="f-l-name">
                        <TextField
                            style={textField}
                            id="first-name" 
                            label="First Name" 
                            variant="outlined" 
                            size="small"
                        />
                        <TextField
                            style={textField}
                            id="last-name" 
                            label="Last Name" 
                            variant="outlined" 
                            size="small"
                        />
                    </div>
                    <div className="email">
                        <TextField
                            style={emailId}
                            id="email" 
                            label="Email ID" 
                            variant="outlined" 
                            size="small"
                        />
                    </div>
                    <div>
                    <Box className="gender">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={handleChange}
                                    size="small"
                                >
                                <MenuItem value={'male'}>Male</MenuItem>
                                <MenuItem value={'female'}>Female</MenuItem>
                                <MenuItem value={'others'}>Others</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className="already-account">
                    <h4 className="already-account-msg">Already have account?</h4>
                    <Button className="login-btn" variant="contained">Login</Button>
                </div>
            </div>
        </div>
    );
}

export default Home;