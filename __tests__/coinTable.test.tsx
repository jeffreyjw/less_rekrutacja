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
      is_new: false,
      is_active: true,
      type: 'coin',
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
      is_new: false,
      is_active: true,
      type: 'coin',
    },
    {
      id: 'eth-ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      rank: 2,
      is_new: false,
      is_active: true,
      type: 'coin',
    },
  ];
  renderer.create(<CoinTable coins={coins} />);
});
