import React, {useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransaction] = useState([])
  const [search, setSearch] = useState("");
  useEffect(()=> {
    fetch("http://localhost:3000/transactions")
    .then(r => r.json())
    .then((data)=> setTransaction(data))
  }, [])
  // console.log(transactions)

  function updatedTransactions(newTransactions){
    const updatedTransactionsArray = [...transactions, newTransactions]
    setTransaction(updatedTransactionsArray)
  }
  return (
    <div>
      <Search searchTerm={search} setSearch={setSearch}/>
      <AddTransactionForm newData={updatedTransactions}/>
      <TransactionsList arrayOfAllTransactions={transactions} transactionsSetter={setTransaction} searchTerm={search}/>
    </div>
  );
}

export default AccountContainer;
