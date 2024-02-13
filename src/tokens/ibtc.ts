import { defaultFetcherOptions, SupplyFetcher } from "../types";
import { getMaestroClient } from "../utils";

const iBTC = "f66d78b4a3cb3d37afa0ec36461e51ecbde00f26c8f0a68f94b6988069425443";

const fetcher: SupplyFetcher = async (options = defaultFetcherOptions) => {
  const maestro = getMaestroClient(options);
  const assetInfo = await maestro.assets
    .assetInfo(iBTC)
    .then((res) => res.data);
  const circulating = Number(assetInfo?.total_supply) / 1e6;
  return {
    circulating: circulating.toString(),
    total: circulating.toString(),
  };
};

export default fetcher;
