import React, {useState, useCallback, useEffect} from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import {Coin} from './coins.data';

interface CoinTableProps {
  coins: Coin[];
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#dadada',
  },
  headerColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableItem: {
    height: 40,
    flexDirection: 'row',
  },
  tableItemColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#dadada',
  },
});

const Separator = () => <View style={styles.separator} />;

const CoinTableHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerColumn}>
        <Text>#</Text>
      </View>
      <View style={styles.headerColumn}>
        <Text>Name</Text>
      </View>
      <View style={styles.headerColumn}>
        <Text>Chart</Text>
      </View>
    </View>
  );
};

interface CoinItemProps {
  item: Coin;
  index: number;
  allowChartLoading: boolean;
}

const CoinItem = ({item, index, allowChartLoading}: CoinItemProps) => {
  const [chartLoaded, setChartLoaded] = useState(false);

  useEffect(() => {
    if (allowChartLoading) {
      setChartLoaded(true);
    }
  }, [allowChartLoading]);

  return (
    <TouchableOpacity key={item.id}>
      <View style={styles.tableItem}>
        <View style={styles.tableItemColumn}>
          <Text>{index + 1}</Text>
        </View>
        <View style={styles.tableItemColumn}>
          <Text>
            {item.name} {item.symbol}
          </Text>
        </View>
        <View style={styles.tableItemColumn}>
          {chartLoaded ? <Text>Chart</Text> : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const CoinTable = ({coins}: CoinTableProps) => {
  const [isScrolling, setScrolling] = useState(false);
  const beginScrolling = useCallback(() => setScrolling(true), [setScrolling]);
  const endScrolling = useCallback(() => setScrolling(false), [setScrolling]);

  return (
    <View>
      <CoinTableHeader />
      <FlatList
        data={coins}
        renderItem={({item, index}) => (
          <CoinItem
            item={item}
            index={index}
            allowChartLoading={!isScrolling}
          />
        )}
        ItemSeparatorComponent={Separator}
        onScrollBeginDrag={beginScrolling}
        onScrollEndDrag={endScrolling}
      />
    </View>
  );
};
