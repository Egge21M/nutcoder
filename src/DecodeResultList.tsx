import { Token } from "@cashu/cashu-ts";
import React from "react";
import DecodeResultToken from "./DecodeResultToken";

function DecodeResultList({ decodedToken }: { decodedToken: Token }) {
  return (
    <div className="w-full">
      <h2>Decoder Result</h2>
      <div className="bg-slate-600 p-4">
        <p>Memo: {decodedToken.memo}</p>
        <p>Unit: {decodedToken.unit}</p>
        <p>Mint: {decodedToken.token[0].mint}</p>
      </div>
      {decodedToken.token.map((t, i) => (
        <DecodeResultToken tokenEntry={t} index={i} />
      ))}
    </div>
  );
}

export default DecodeResultList;
