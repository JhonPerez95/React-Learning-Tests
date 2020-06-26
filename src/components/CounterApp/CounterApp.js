import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import useStyles from './style';

const CounterApp = ({ value }) => {
  // MATERIAL-UI
  const classes = useStyles();

  //STATE
  const [count, setCount] = useState(value);

  //ONCLICK
  const handlerCount = () => {
    setCount(count + value);
  };

  const handlerReset = () => {
    setCount(0);
  };

  const handlerCountRest = () => {
    setCount(count - value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <div className={classes.root}>
        <Button
          onClick={handlerCount}
          variant="contained"
          color="primary"
          id="btnIncrement"
        >
          Count + {value}
        </Button>
        <Button onClick={handlerReset} variant="contained" color="secondary">
          Reset
        </Button>
        <Button onClick={handlerCountRest} variant="contained">
          Count - {value}
        </Button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterApp;
