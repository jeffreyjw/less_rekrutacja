import {Coin} from './coins.data';

export const fetchCoins: () => Promise<Coin[]> = async () => {
  const response = await fetch('https://api.coinpaprika.com/v1/coins');
  const coins = await response.json();

  return coins;
};
