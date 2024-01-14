import React from 'react'

const transactionList = () => {
  return (
    <>
      <p>History</p>
      <ul id='list' className='list'>
        <li className='minus'>
            Cash <span>-$400.00</span><button className='delete-btn'>X</button>
        </li>
      </ul>
    </>
  )
}

export default transactionList
