import React from "react";
import Transaction from "./Transaction";

function TransactionsList({arrayOfAllTransactions, transactionsSetter, searchTerm}) {
  let transactionList = "Loading...";

  if(arrayOfAllTransactions){
    const filteredTransactions = arrayOfAllTransactions.filter(transaction=> {
      return (transaction.description.toLowerCase().includes(searchTerm.toLowerCase()))
    })
    transactionList = filteredTransactions.map((transaction) => (
    <Transaction 
    key={transaction.id}
    date={transaction.date}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    />
    ))
  }
  // const oneTransaction = arrayOfAllTransactions.map((transaction)=> (
  //   <Transaction 
  //   key={transaction.id}
  //   date={transaction.date}
  //   description={transaction.description}
  //   category={transaction.category}
  //   amount={transaction.amount}
  //   />
  // ));
  // s
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionList}
      </tbody>
    </table>
  );
}

export default TransactionsList;
