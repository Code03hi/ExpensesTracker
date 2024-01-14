import './App.css';
import Header from './component/header';
import Balance from './component/balance';
import Transaction from './component/transactionList';
import IncomeExpenses from './component/incomeExpenses'
import AddTransaction from './component/addTransaction';
import React from 'react'

export default function App() {
  return (
    <div>
      <Header />
      <div>
        <Balance amount="12" />
        <IncomeExpenses income="200" expenses="300"></IncomeExpenses>
        <Transaction></Transaction>
      </div>
        <AddTransaction></AddTransaction>
    </div>
  )
}


