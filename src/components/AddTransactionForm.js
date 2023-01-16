import React, {useState} from "react";

function AddTransactionForm({newData}) {
  const[formData, setFormData] = useState({
    date:"",
    description:"",
    category:"",
    amount:""
  })

  function handleSubmit(event){
    event.preventDefault();
    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then((data)=>newData(data))
  }

  function handleChange(e){
    const key = e.target.name
    const value = e.target.value;
    setFormData({...formData, [key]: value})
    // console.log(formData)

  }
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="inline fields">
          <input onChange={handleChange} type="date" name="date" />
          <input onChange={handleChange} type="text" name="description" placeholder="Description" />
          <input onChange={handleChange} type="text" name="category" placeholder="Category" />
          <input onChange={handleChange} type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
