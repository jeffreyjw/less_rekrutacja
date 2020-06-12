import {useState, useEffect} from 'react';
import {Coin, CoinOHLC} from './coins.data';
import {fetchCoins, fetch7DChart, fetchOHLC} from './coins.fetch';

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
  }, [setCoins]);

  return coins;
};

export const use7DChartData = (coinId: string) => {
  const [chartData, setChartData] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetch7DChart(coinId);
      setChartData(data);
    })();
  }, [coinId, setChartData]);

  return chartData;
};

const timeout = async (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), delay);
  });
};

export const useOHLCData = (coinId: string) => {
  const [ohlcData, setOHLCData] = useState<CoinOHLC | null>(null);

  useEffect(() => {
    (async () => {
      // due to possibly reaching a request limit,
      // we will try to load the data until we succeed,
      // with a random timeout
      // NOTE: this solution is only a quick fix due to time limitationsin the toy example,
      // a good solution for this problem would be changing the API so that
      // the coin data can be partially loaded, and the OHLC data
      // to be with this data, or being able to fetch more than one OHLC
      // data item at a time to make less requests
      // (which should be done and would be the best option for this use case)
      let success = false;

      while (!success) {
        if (!setOHLCData) {
          break;
        }

        try {
          const data = await fetchOHLC(coinId);
          setOHLCData(data[0]);
          success = true;
        } catch (e) {
          success = false;
          await timeout(1000 + Math.random() * 1000);
        }
      }
    })();
  }, [coinId, setOHLCData]);

  return ohlcData;
};
