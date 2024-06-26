import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const ENCS = "9abf0afd2f236a19f2842d502d0450cbcd9c79f123a9708f96fd9b96454e4353";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 15_000_000;
  const treasuryRaw = await fetcher.getAmountInAddresses(ENCS, [
    "stake17ynh8uegtjar9rgdrjfccrer6x674nf58lulned7z5vs6zcrt298r",
  ]);
  const treasury = Number(treasuryRaw) / 1e6;
  return {
    circulating: (total - treasury).toString(),
    total: total.toString(),
  };
};

export default fetcher;
