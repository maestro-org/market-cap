import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const TEDY = "f6696363e9196289ef4f2b4bf34bc8acca5352cdc7509647afe6888f54454459";
const TREASURY_ADDRESSES = [
  "stake1uyjkz4wjew4vd358z4hc20fylty6uzt3vf6h4kxtgpc9naq0ndy2a",
];

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 8e6;
  const treasury = Number(
    await fetcher.getAmountInAddresses(TEDY, TREASURY_ADDRESSES)
  );

  return {
    circulating: ((total * 1e6 - treasury) / 1e6).toString(),
    total: total.toString(),
  };
};

export default fetcher;
