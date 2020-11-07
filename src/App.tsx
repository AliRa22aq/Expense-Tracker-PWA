import React from 'react';
import './App.css';
import AccountSummary from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import Header from './components/Header';
import { TransactionHistory } from './components/TransactionHistory';
import { GlobalProvider } from './context/GlobalState'
import { Grid } from '@material-ui/core';
import {configNotification} from './components/firebase';



function App() {

  return (
    <GlobalProvider>

      <Grid container spacing={2}>

        <Grid item xs={12}> <Header />  </Grid>

        <Grid container spacing={2}>

          <Grid item xs={12} lg={4} className='boarder'>

            <Grid item xs={12}> <Balance /> </Grid>
            <Grid item xs={12} style={{ backgroundColor: "black", color: "white" }} > <AccountSummary /> </Grid>
            <Grid item xs={12} > <AddTransaction /> </Grid>

          </Grid>
          <Grid item xs={12} lg={8} className='max'>
            <TransactionHistory />
            <button onClick={configNotification}> Click </button>
          </Grid>

        </Grid>






      </Grid>

    </GlobalProvider>
  );
}

export default App;
