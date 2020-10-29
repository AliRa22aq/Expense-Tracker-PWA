import React from 'react';
import './App.css';
import AccountSummary from './components/AccountSummary';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import Header from './components/Header';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <div >
      <Header />
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
