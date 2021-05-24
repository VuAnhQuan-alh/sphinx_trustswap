import axios from "axios";

 export const getMarketBNB =  () => {
    return new Promise(resolve => {
      setTimeout(async() => {
        const { data: { 0: { current_price, total_supply, low_24h, price_change_24h } } } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h');
        resolve([current_price, total_supply, low_24h, price_change_24h ])
      },1000)
    })
  }
