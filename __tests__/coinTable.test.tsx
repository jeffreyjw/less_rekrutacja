/**
 * @format
 */

import 'react-native';
import React from 'react';
import {CoinTable} from '../src/coins/coinTable.component';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Renders with empty coins', () => {
  renderer.create(<CoinTable coins={[]} />);
});

it('Renders with a single coin', () => {
  const coins = [
    {
      id: 'btc-bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      circulating_supply: 18402419,
      total_supply: 18402419,
      max_supply: 21000000,
      beta_value: 1.04775,
      last_updated: '2020-06-12T14:22:48Z',
      quotes: {
        USD: {
          price: 9531.1845958,
          volume_24h: 24184354201.12,
          volume_24h_change_24h: 9.45,
          market_cap: 175396785779,
          market_cap_change_24h: -1.47,
          percent_change_15m: -0.13,
          percent_change_30m: 0.25,
          percent_change_1h: 0.44,
          percent_change_6h: 0.42,
          percent_change_12h: 1.86,
          percent_change_24h: -1.47,
          percent_change_7d: -1.81,
          percent_change_30d: 4.24,
          percent_change_1y: 16.25,
          ath_price: 20089,
          ath_date: '2017-12-17T12:19:00Z',
          percent_from_price_ath: -52.56,
        },
      },
    },
  ];
  renderer.create(<CoinTable coins={coins} />);
});

it('Renders with 2 coins', () => {
  const coins = [
    {
      id: 'btc-bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      rank: 1,
      circulating_supply: 18402419,
      total_supply: 18402419,
      max_supply: 21000000,
      beta_value: 1.04775,
      last_updated: '2020-06-12T14:22:48Z',
      quotes: {
        USD: {
          price: 9531.1845958,
          volume_24h: 24184354201.12,
          volume_24h_change_24h: 9.45,
          market_cap: 175396785779,
          market_cap_change_24h: -1.47,
          percent_change_15m: -0.13,
          percent_change_30m: 0.25,
          percent_change_1h: 0.44,
          percent_change_6h: 0.42,
          percent_change_12h: 1.86,
          percent_change_24h: -1.47,
          percent_change_7d: -1.81,
          percent_change_30d: 4.24,
          percent_change_1y: 16.25,
          ath_price: 20089,
          ath_date: '2017-12-17T12:19:00Z',
          percent_from_price_ath: -52.56,
        },
      },
    },
    {
      id: 'miota-iota',
      name: 'IOTA',
      symbol: 'MIOTA',
      rank: 23,
      circulating_supply: 2779530283,
      total_supply: 2779530283,
      max_supply: 2779530283,
      beta_value: 0.963748,
      last_updated: '2020-06-12T14:22:48Z',
      quotes: {
        USD: {
          price: 0.22840698,
          volume_24h: 10324066.863027,
          volume_24h_change_24h: 40.42,
          market_cap: 634864117,
          market_cap_change_24h: -4.47,
          percent_change_15m: 0,
          percent_change_30m: 0.71,
          percent_change_1h: -0.03,
          percent_change_6h: -0.46,
          percent_change_12h: 1.01,
          percent_change_24h: -4.47,
          percent_change_7d: -7.92,
          percent_change_30d: 18.51,
          percent_change_1y: -48.66,
          ath_price: 5.69002,
          ath_date: '2017-12-19T20:09:00Z',
          percent_from_price_ath: -95.99,
        },
      },
    },
  ];
  renderer.create(<CoinTable coins={coins} />);
});
