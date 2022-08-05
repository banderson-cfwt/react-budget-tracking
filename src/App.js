import React, { useRef } from 'react';
import Main from './components/main/Main';
import Details from './components/Details/Details';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { Grid } from '@material-ui/core';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const main = useRef(null)

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer>
      </Grid>
    </div>
  );
};

export default App;