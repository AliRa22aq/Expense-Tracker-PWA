import React from 'react';
import './App.css';
import AccountSummary from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import Header from './components/Header';
import { TransactionHistory } from './components/TransactionHistory';
import {GlobalProvider} from './context/GlobalState'
import { Grid } from '@material-ui/core';


function App() {
  return (
    <GlobalProvider>
      
      <Header /> 
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      
    </GlobalProvider>
  );
}

export default App;
