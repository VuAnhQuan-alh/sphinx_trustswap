import axios from 'axios';

export const data = async () => {
  const { data: { 0: { sparkline_in_7d: { price } } } } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=binancecoin&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h');
  const number = price.map((item, idx) => {
    const date = new Date();
    idx += date.getHours();
    const hour = ++idx < 24 ? idx : idx % 24;
    return hour + 'h';
  });
  const base = {
    labels: [...number],
    datasets: [
      {
        label: 'Binance Coin (BNB)',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(72,166,242,0.35)',
        borderColor: 'rgba(72,166,242,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(72,166,242,0.5)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(72,166,242,0.5)',
        pointHoverBorderColor: 'rgba(72,166,242,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [...price]
      },
    ]
  };
  return base;
}
