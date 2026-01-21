"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Security from "./Security";
import { useEffect, useState } from "react";

const ALLOWED_KEYS = ["A9$kR7!mQe2Z@Wf#T8pL", "X4!vM@2Pq9#LrS7$eZkF"];

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    const key = searchParams.get("key");
    // Only update state if it's different
    if (key && ALLOWED_KEYS.includes(key)) {
      setPassword(key);
    } else {
      setPassword("");
    }
    router.replace("/Login/Security", { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Security password={password} setPassowrd={setPassword} />;
}
