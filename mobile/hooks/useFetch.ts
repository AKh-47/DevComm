import { useState, useEffect } from "react";
import { Nullable } from "../utils/types";

export default () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Nullable<string>>(null);

  useEffect(() => {
    const getdata = async () => {
      const json = await fetch("http://localhost:8000/rooms");
      const raw = await json.json();
      setData(raw);
    };

    getdata().catch((err) => setError(err.message));
  }, []);

  return [data, error];
};
