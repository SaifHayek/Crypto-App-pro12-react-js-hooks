import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'

function App() {
  let [cryptos , setCryptos] = useState([])
  let [searchVal,setSearchVal] = useState('')


  useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res =>setCryptos(res.data))
        .catch(err => console.log(err))
  },[searchVal]) 

  const handleInputSearch = (e) => {
    setSearchVal(e.target.value)
  }

  let searchedValues = cryptos.filter(cr => cr.name.toLowerCase().includes(searchVal.toLowerCase()))
  return (
    <div className='container'>
       <input type="text" name="search" placeholder='Provide the coin name' value={searchVal} onChange={handleInputSearch}/>
       <Table cryptos={searchedValues}/>
    </div>
  ) 
}

export default App
  