import React, {useState, useCallback, useEffect} from 'react';
import {FlatList, TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import {Coin} from './coins.data';
import {use7DChartData} from './coins.hooks';

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
      />
    </View>
  );
};
