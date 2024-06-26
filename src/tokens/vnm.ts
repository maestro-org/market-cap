import { SupplyFetcher } from "../types";
import { defaultFetcher } from "../utils";

const VNM = "2d92af60ee429bce238d3fd9f2531b45457301d74dad1bcf3f9d1dca564e4d";

const fetcher: SupplyFetcher = async (fetcher = defaultFetcher) => {
  const total = 150e6;

  const treasuryRaw = await fetcher.getAmountInAddresses(VNM, [
    "stake1u8uv6eaj6ulpymd7ua6ag203fet6ypv9xj7aj8525vnjwyqlqyqsp",
  ]);

  const burnRaw = await fetcher.getAmountInAddresses(VNM, [
    "addr1z8kadskrrswl3avwe9psd3mar5l7shf06slyxr2tetwln4nzg06w6dvxg0vuzx4s0uenlr0vfucctcfwpa2eshd86taqduntvj", //$burnvnm
  ]);

  const treasury = Number(treasuryRaw) / 1e4;

  const burn = Number(burnRaw) / 1e4;

  return {
    circulating: (total - treasury - burn).toString(),
    total: (total - burn).toString(),
  };
};

export default fetcher;
