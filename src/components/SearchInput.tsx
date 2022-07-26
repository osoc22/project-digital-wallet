import * as React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function FreeSoloCreateOption() {

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent:'space-between',
        alignItems: "center",
        border: "1px solid #d3d3d3",
        borderRadius:'3%',
        paddingLeft: "10px",
        backgroundColor: "white",
        width:'93%',
      }}
    >
      <SearchIcon sx={{color:'gray'}} />
        <TextField
          sx={{marginTop:'-16px'}}
          label="Search components"
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          />
      <Button sx={{dispĺay:'flex',justifyContent:'end'}} variant="contained">Search</Button>
    </Box>
  );
}
