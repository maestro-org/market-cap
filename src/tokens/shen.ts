import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getAmountInAddresses, getMaestroClient } from "../utils";

const SHEN =
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd615368656e4d6963726f555344";
const DJEDNFT =
  "8db269c3ec630e06ae29f74bc39edd1f87c819f1056206e879a1cd61446a6564537461626c65436f696e4e4654";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const total = 1e12;
  const res = await maestro.assets.assetAddresses(DJEDNFT);
  const addresses = res.data;
  const treasuryRaw = await getAmountInAddresses(maestro, SHEN, [
    addresses[0]["address"],
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: (total - treasury).toString(),
  };
};

export default fetcher;
