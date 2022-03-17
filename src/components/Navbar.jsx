import * as React from 'react';
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";
 
const useStyles = makeStyles({
  root: {
    zIndex: 100,
  },
})

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
     if(value === 0) {
       history.push("/");
     } else if (value === 1) {
       history.push("/movies")
     } else if (value === 2) {
       history.push("/about")
  } 
  }, [value, history]);

// const links = [
//  {
//     title: "Home",
//     link: "/",
//     id: "header-link-home",
//   },
//   //   add the other link as well
// ];

 
  return (
    
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className="{classes.root}"
        style={{backgroundColor: 'grey' }}
      >
        <BottomNavigationAction 
        style={{color: "green"}}
        label= "Home" />
        <BottomNavigationAction 
        style={{color: 'green'}}
        label="Movies" />
        <BottomNavigationAction 
        style={{color: 'green'}}
        label="About" />
      </BottomNavigation>
    
  );
}


//};
