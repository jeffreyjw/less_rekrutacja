import {CoinOHLC} from './coins.data';

interface OHLCCache {
  [key: string]: CoinOHLC;
}

// we don't need this cache to be a react state,
// it will be even better if it won't be one,
// so we can store it here, assuming that we don't
// need to refresh the data after some time
// in this toy example
export const OHLCLocalCache: OHLCCache = {};
