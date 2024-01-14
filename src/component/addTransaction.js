import React, { useState } from 'react'

export const AddTransaction = () => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState('');

  return (
    <>
      <h3>Add new transaction</h3>
      <form action="#" id='form'>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" name="" value={text} id="text" required placeholder='Enter text' onChange={(e) =>
            setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income) </label>
          <input type="number" name="" value={amount} required id="amount" placeholder='Enter amount....' onChange={(e) =>
            setAmount(e.target.value)} />
        </div>
        <button className='btn' >Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
