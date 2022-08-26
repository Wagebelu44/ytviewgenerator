import React, { useState } from "react";
import YouTube from "react-youtube";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Homepage = () => {
  const [inputfieldsToAdd, setInputfieldsToAdd] = useState(1);
  const [committedFieldsToAdd, setCommittedFieldsToAdd] = useState(0);

  const [link, setlink] = useState();

  const opts = {
    height: "315",
    width: "560",
    border:0,
    padding:0,
    playerVars: {
      autoplay: 1,
      mute:1,
      vq:'small'
    },
  };
     
  window.onbeforeunload = function() {
    return "Your progress will be lost if you leave the page, are you sure?";
  };
  
  return (
    <div>
      <div>
        <TextField
        
        label="Enter Video Id"
          type="text"
          value={link}
          onChange={(e) => {
            setlink(e.target.value);
          }}
          placeholder="Video Id"
        />
      </div>
      <div  style={{marginTop:"30px",marginBottom:"20px"}}>
        <TextField
       
          type="number"
          placeholder="View count"
          label="Numer Of View"
          value={inputfieldsToAdd}
          onChange={(e) =>
            setInputfieldsToAdd(parseInt(e.currentTarget.value,10))
          }
        />
      </div>

      <Button
      sx={{color:'black',bgcolor:"#59CE8F"}}
      varient="outlined"
      size="large"
        onClick={() => {
          setCommittedFieldsToAdd(inputfieldsToAdd);
        }}
      >
        Generate View
      </Button>
      <Grid container spacing={.5} columns={{ xs: 1, sm: 6, md: 12 }} mt={3}>
      {[...Array(committedFieldsToAdd)].map(( index) => (
        
        <Grid item xs={1} sm={12} md={3} lg={2}  key={index}>
        <YouTube videoId={link} opts={opts} />
      </Grid>
      ))}
       </Grid>
    </div>
  );
};

export default Homepage;
