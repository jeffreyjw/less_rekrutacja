import React from 'react';
import {
  FlatList,
  TouchableOpacity,
  Text,
  ListRenderItem,
  View,
  StyleSheet,
} from 'react-native';
import {Coin} from './coins.data';

interface CoinTableProps {
  coins: Coin[];
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'red',
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
});

const CoinTableHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerColumn}>
        <Text>#</Text>
      </View>
      <View style={styles.headerColumn}>
        <Text>Name</Text>
      </View>
    </View>
  );
};

const CoinItem: ListRenderItem<Coin> = ({item, index}) => (
  <TouchableOpacity key={item.id}>
    <View style={styles.tableItem}>
      <Text style={styles.tableItemColumn}>{index + 1}</Text>
      <Text style={styles.tableItemColumn}>
        {item.name} {item.symbol}
      </Text>
    </View>
  </TouchableOpacity>
);

export const CoinTable = ({coins}: CoinTableProps) => {
  return (
    <View>
      <CoinTableHeader />
      <FlatList data={coins} renderItem={CoinItem} />
    </View>
  );
};
