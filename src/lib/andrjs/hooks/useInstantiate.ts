import type { Fee, Msg } from "@andromedaprotocol/andromeda.js";
import { Coin } from "@cosmjs/proto-signing";
import { useCallback } from "react";
import useAndromedaClient from "./useAndromedaClient";

/**
 * A hook for creating a new contract, returns an async instantiate function
 * @returns instantiate
 */
export default function useInstantiateContract() {
  const client = useAndromedaClient();
  const instantiate_contract=async()=>{
  const cw20_instantiate_message= {
    name: "Example CW20 Token",
    symbol: "CW20",
    minter:process.env.NEXT_PUBLIC_MINTER_ADDRESS,
    kernel_address:process.env.NEXT_PUBLIC_KERNEL_ADDRESS,
  };
  try{
    const contract=await client!.queryContractSmart(process.env.NEXT_PUBLIC_CW20_ADDRESS, { config: {} });
  }
  catch(e){
    const codeId=await client!.getCodeId("cw20");
    const instantiate=await client!.instantiate(codeId,cw20_instantiate_message, "Instantiate CW20 Token", {
      amount: [{ amount: "1000000000", denom: "uandr" }]
    });
  }
}

  const instantiate = useCallback(
    async (codeId: number, msg: Msg, label = "Instantiate with Starter Template", fee: Fee, memo = "Instantiate with Starter Template", funds?: Coin[]) => {
      return client!.instantiate(codeId, msg, label, fee, {
        memo,
        funds
      });
    },
    [client],
  );

  return instantiate;
}
