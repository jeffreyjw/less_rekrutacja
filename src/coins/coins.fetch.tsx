import {Coin} from './coins.data';

export const fetchCoins: () => Promise<Coin[]> = async () => {
  const response = await fetch('https://api.coinpaprika.com/v1/tickers');
  const coins = await response.json();

  return coins;
};

export const fetch7DChart: (coinId: string) => Promise<string> = async (
  coinId,
) => {
  const response = await fetch(
    `https://graphs2.coinpaprika.com/currency/chart/${coinId}/7d/chart.svg`,
  );
  const chartData = await response.text();

  return chartData;
};
