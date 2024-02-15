import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 125_000_000;
  const circulating: number = await fetcher
    .axios("https://api.coingecko.com/api/v3/coins/ardana")
    .then((res) => res.data.market_data.circulating_supply);
  return {
    circulating: circulating.toString(),
    total: total.toString(),
  };
};

export default fetcher;
