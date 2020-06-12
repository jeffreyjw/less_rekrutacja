import React from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {Coin} from './coins.data';
import {use7DChartData} from './coins.hooks';

interface CoinTableProps {
  coins: Coin[];
}

const ITEM_HEIGHT = 40;
const SEPARATOR_HEIGHT = 1;

const styles = StyleSheet.create({
  header: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
    backgroundColor: '#dadada',
  },
  headerColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableItem: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
  },
  tableItemColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: SEPARATOR_HEIGHT,
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
}

const CoinItem = ({item, index}: CoinItemProps) => {
  const chartData = use7DChartData(item.id);

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
          {chartData ? (
            <SvgUri width={120} height={23} svgXmlData={chartData} />
          ) : (
            <Text>Loading</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const CoinTable = ({coins}: CoinTableProps) => {
  return (
    <View>
      <CoinTableHeader />
      <FlatList
        data={coins}
        renderItem={({item, index}) => <CoinItem item={item} index={index} />}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item) => item.id}
        getItemLayout={(data, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index + SEPARATOR_HEIGHT * index,
          index,
        })}
      />
    </View>
  );
};
