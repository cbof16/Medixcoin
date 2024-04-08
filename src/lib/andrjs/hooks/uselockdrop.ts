import type { Fee, Msg } from "@andromedaprotocol/andromeda.js";
import { Coin } from "@cosmjs/proto-signing";
import { useCallback } from "react";
import useAndromedaClient from "./useAndromedaClient";
import useGetCodeId from "./useGetCodeId";
import { useRouter,useSearchParams } from "next/router";
import { useState } from "react";

/**
 * A hook for performing an execute message on a given contract, returns an async execute function
 * @param address
 * @returns
 */
export default function useExecuteContract(address: string) {
const distributeNft=async()=>{
 const router=useRouter();
 const {data:code_id}=useGetCodeId("lockdrop");
 const queryparams=useSearchParams();
 const refNftTokenid:string=queryparams.get("ref_NFT");
 const contractAddress:string | null =queryparams.get("contract_address");
 const [allNFt,setAllNft]=useState<any>([]);
 const [image,setImage]=useState<string>("");
 const [lockdropaddress,setLockdropaddress]=useState<string>("");
 const [transactionwaiting,setTransactionwaiting]=useState<boolean>(false);
}
  const client = useAndromedaClient();

  const execute = useCallback(
    async (msg: Msg, fee: Fee, memo = "Execute Starter Template", funds?: Coin[]) => {
      return client!.execute(address, msg, fee, memo, funds);
    },
    [address, client],
  );

  return execute;
}
