import React from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import NavBar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import Box from '@material-ui/core/Box';
import { Grid } from "@material-ui/core";



class App extends React.Component  {
  render(){
    return (
      <MuiThemeProvider>
        <div>
          <Grid container justify="center">
            <Box 
            
            style ={{ 
            backgroundImage: "linear-gradient(to left bottom, #0464f5, #387cf7, #5b94f7, #7daaf4, #9fbff0)",
            width:"100%",
            color: "white",
            lineHeight: "120px",
            textAlign:"center",
            textTransform:"uppercase",
            fontSize:"200%",
            fontWeight:"200",
            letterSpacing:"20px"
          }} >
              Image Finder Machine
            </Box>
          </Grid>
          <Search/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
