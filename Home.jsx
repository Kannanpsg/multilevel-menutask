import{useState} from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Grid from "@mui/material/Grid";



const currencies = [
  {
    value: 'USD',
    label: 'Choose a parent category',
  },
  {
    value: 'EUR',
    label: 'Mega Menu',
  },
  {
    value: 'BTC',
    label: 'Right Dropdown',
  },
  {
    value: 'JPY',
    label: 'Any Page',
  },
];


export default function Home(){
  {
    const [currency, setCurrency] = React.useState('EUR');
  
    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    return (
        <div className="Top">
            
        <div className="paper">
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 2,
          width:280,
          height: 300,
        },
      }}
    >
      <Paper elevation={0} />
    </Box>
    </div>
    <h2>Add a New Category</h2>
    <div className="Category button">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Category Name"
          defaultValue="Enter category name"
        />
        </div>
    </Box>
    </div>
    <div className="parent button">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Parent Category"
          onChange={handleChange}
          helperText="Please select your Parent"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
    </Box>
    </div>
    <div className="Submit button">
    <Button variant="contained" disableElevation>
      Add Category
    </Button>
    
    </div>
    </div>
    );
  }

}
