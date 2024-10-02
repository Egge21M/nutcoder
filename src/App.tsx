import { getDecodedToken } from "@cashu/cashu-ts";
import { useMemo, useState } from "react";
import DecodeResultList from "./DecodeResultList";

function App() {
  const [token, setToken] = useState("");
  const [error, setError] = useState("");
  const decoded = useMemo(() => {
    if (token) {
      setError("");
      try {
        return getDecodedToken(token);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    }
  }, [token]);
  return (
    <div className="inset-0 absolute flex flex-col justify-center items-center p-4">
      <h1>Cashu Token Decoder</h1>
      <div className="flex flex-col w-full max-w-screen-lg bg-slate-500 p-4 gap-4">
        <input
          id="tokenInput"
          placeholder="cashu..."
          className="bg-slate-600 w-full p-4 rounded"
          onChange={(e) => {
            setToken(e.target.value);
          }}
        />
        {decoded ? <DecodeResultList decodedToken={decoded} /> : undefined}
        {error ? <p>{error}</p> : undefined}
      </div>
    </div>
  );
}

export default App;
