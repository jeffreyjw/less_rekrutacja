import {useState, useEffect} from 'react';
import {Coin} from './coins.data';
import {fetchCoins, fetch7DChart} from './coins.fetch';

export const useCoins = () => {
  const [coins, setCoins] = useState<Coin[] | null>(null);

  // for the purpose of the task
  // we assume that fetching the results
  // only ont time is enough
  useEffect(() => {
    (async () => {
      const coinsResult = await fetchCoins();
      setCoins(coinsResult);
    })();
  }, []);

  return coins;
};

export const use7DChartData = (coinId: string) => {
  const [chartData, setChartData] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch7DChart(coinId);
      setChartData(data);
    })();
  }, [coinId]);

  return chartData;
};
