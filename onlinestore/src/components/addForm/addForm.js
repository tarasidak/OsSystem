import React, { useState } from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: 'column',
    flexWrap: "wrap",
    width:'40%',
    marginLeft: '30%'
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function CustomizedInputs() {
  const classes = useStyles();

  const [addName, setAddName] = useState('');
  const [addPrice, setAddPrice] = useState('');
  const [addDesc, setAddDesc] = useState('');

  function rand(){
    let rand = Math.floor(Math.random() * 1000);
    let randId = rand + addName;
    return randId;
}

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        onChange={e => setAddName(e.target.value)}
        className={classes.margin}
        label="Add Name"
        variant="outlined"
        id="nameInput"
      />
      <CssTextField
        onChange={e => setAddPrice(e.target.value)}
        className={classes.margin}
        label="Add Price"
        variant="outlined"
        id="priceInput"
      />
      <CssTextField
        onChange={e => setAddDesc(e.target.value)}
        className={classes.margin}
        label="Add Description"
        variant="outlined"
        id="deskInput"
      />
      <div className={classes.root}>
        <Button variant="contained" color="primary"
                onClick={() => {
                    const store = localStorage.getItem('savedSneaker');
                    let savedSneaker = JSON.parse(store);
                    savedSneaker.push({id: rand(), 'name': addName, 'price': addPrice, 'description': addDesc }) 
                    console.log(store);
                    localStorage.setItem('savedSneaker', JSON.stringify(savedSneaker));   
                }}>
            Add Item
        </Button>
        </div>
    </form>
  );
}
