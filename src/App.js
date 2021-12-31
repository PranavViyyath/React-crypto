
import axios from 'axios';
import {useState,useEffect} from 'react'
import './App.css';
import Coin from './Coin';

const Coin_Api='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

function App() {

  const [coins, setCoins] = useState([])
  const [search,setSearch]=useState('')
  
  useEffect(() => {
   axios.get(Coin_Api).then(res=>{
     setCoins(res.data)
     console.log(res.data)
   }).catch(error=>console.log(error))
  }, [])

const handleChange=(e)=>{
  setSearch(e.target.value)
}

const filterCoin=coins.filter(coin=>
  (coin.name.toLowerCase().includes(search.toLowerCase()))||(coin.symbol.toLowerCase().includes(search.toLowerCase()))
  
)


  return (
    <div className="App">
      
      <h1 className="App-header">Crypto </h1>
      <div className='search-coin'>
        <h2 className='coin-search'>Seach here</h2>
        <form className='coin-form'>
          <input className='coin-input' type='text' placeholder='search' onChange={handleChange}></input>
        </form>
      </div>
      {filterCoin.map(coin=>{
        return(
          <Coin
          key={coin.id}
          name={coin.name}
          symbol={coin.symbol}
          image={coin.image}
          price={coin.current_price}
          volume={coin.total_volume.toLocaleString()}
          priceChange={coin.price_change_percentage_24h}
          marketCap={coin.market_cap.toLocaleString()}
          />
        )
      })}
     
    
    </div>
  );
}

export default App;
