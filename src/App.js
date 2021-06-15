import React, {useState, useEffect} from 'react';
import Coin from './Coin';
import axios from 'axios';




//https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=true


function App() {

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');


  useEffect(() =>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
        setCoins(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin =>{
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })


  return (
    <div className="container text-center flex flex-col">
      <div className="mt-6 py-8 px-4 ">
        <h1 className='text-5xl font-poppins text-white'>Search a Currency</h1>
        <form>
          <input className="mt-6 text-xl bg-gray-800 border-b-2 w-1/2 text-white px-2 h-11 rounded resize-x focus:outline-none"   
            onChange={handleChange} 
            type="text" 
            placeholder="Search"  
          />
        </form>
      </div>
      <div>
        {
          filteredCoins.map(coin =>{
            return <Coin 
            key={coin.id} 
            name={coin.name} 
            image={coin.image} 
            symbol={coin.symbol} 
            volume={coin.market_cap} 
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}  />
          })
        }
      </div>
    </div>
  );
}

export default App;
