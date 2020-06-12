/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {useCoins} from './coins/coins.hooks';
import {CoinTable} from './coins/coinTable.component';

declare const global: {HermesInternal: null | {}};

export const App = () => {
  const coins = useCoins();

  return coins ? (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CoinTable coins={coins} />
      </SafeAreaView>
    </>
  ) : null;
};
