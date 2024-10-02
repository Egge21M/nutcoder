import { TokenEntry } from "@cashu/cashu-ts";
import { useState } from "react";
import { ActiveItem } from "./types";
import DecodeResultInfo from "./DecodeResultInfo";

function DecodeResultToken({ tokenEntry }: { tokenEntry: TokenEntry }) {
  const [active, setActive] = useState<ActiveItem>();
  return (
    <div className="bg-slate-700 gap-4 grid grid-cols-3">
      <div className="col-span-2 flex flex-col break-words gap-2">
        {tokenEntry.proofs.map((p, i) => (
          <div className="flex gap-2 bg-slate-800 items-stretch">
            <div className="flex items-center justify-center bg-slate-900 w-1/6">
              <p>Proof {i + 1}</p>
            </div>
            <div className="grow flex flex-col gap-2 break-words overflow-hidden p-1">
              <p
                className="bg-slate-900 p-1"
                onClick={() => {
                  setActive({ type: "amount", data: p.amount });
                }}
              >
                Amount: {p.amount}
              </p>
              <p
                className="bg-slate-900 text-xs p-1"
                onClick={() => {
                  setActive({ type: "secret", data: p.secret });
                }}
              >
                Secret: {p.secret}
              </p>
              <p
                className="bg-slate-900 text-xs p-1"
                onClick={() => {
                  setActive({ type: "signature", data: p.C });
                }}
              >
                Signature: {p.C}
              </p>
              <p
                className="bg-slate-900 text-xs p-1"
                onClick={() => {
                  setActive({ type: "id", data: p.id });
                }}
              >
                Keyset: {p.id}
              </p>
            </div>
          </div>
        ))}
      </div>
      <DecodeResultInfo activeItem={active} />
    </div>
  );
}

export default DecodeResultToken;
