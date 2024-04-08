// config.ts
export const enum CHAINS{
	LINEA = 59144,
  }
  
export const RPC_URLS = {
	[CHAINS.LINEA]: "https://rpc.linea.build",
  };

export const SUBGRAPH_URL = "https://api.goldsky.com/api/public/project_clu5ow773st3501un98cv0861/subgraphs/TeavaultV3Pair-linea/1.0/gn";

interface PoolSymbolMap {
	[key: string]: string;
  }
  
export const POOL_SYMBOL: PoolSymbolMap = {
"0x4f922f65eab9315464420a3c7107aa5e65cad728": "TEA-PL-TEST-USDC-USDT-100",
"0xa40d6143e370a0cc3df565c665ea4b2bf5c0410d": "TEA-PL-TEST-USDC-WETH-500",
"0xcC7e2cc69f12a22fc2e097B46088D2F9c771d4BD": "TEA-PL-WETH-WSTETH-500",
"0xB6913f2e3B0d553B9166c85db48c08DcB4F68105": "TEA-PL-WETH-WBTC-500"
};