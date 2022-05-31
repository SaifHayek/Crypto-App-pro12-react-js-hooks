import React from 'react'

function Table({cryptos}) {

  let rows = cryptos.map(cr => <tr key={cr.id}>
                                    <td>
                                        <div className='img-wrapper'>
                                            {<img className='crypto-img' src={`${cr.image}`} alt = {`${cr.name}`}/>}
                                            {cr.name}
                                        </div>
                                    </td>
                                    <td>
                                        Rs.{cr.current_price}
                                    </td>
                                    <td>
                                        {cr.price_change_percentage_24h < 0 ? <p className='red-coin'>{cr.price_change_percentage_24h.toFixed(2)}%</p> : <p className='green-coin'>{cr.price_change_percentage_24h.toFixed(2)}%</p>}
                                    </td>
                                    <td>
                                        Mkt Cap
                                        <p>Rs.{cr.market_cap.toLocaleString()}</p>
                                    </td>
                                        
                                </tr>)  
  return (
    <table> 
        <tbody>
            {rows}

        </tbody>
    </table>
  )
}

export default Table
 
