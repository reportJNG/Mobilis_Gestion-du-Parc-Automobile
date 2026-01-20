"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import FullpagePanel from "./FullpagePanel";

export default function Home() {
  const parms = useSearchParams();
  const router = useRouter();

  // Read t07 param once
  const [adminbridge, setAdminbridge] = useState<boolean>(
    () => parms.get("t07") === "true",
  );

  useEffect(() => {
    if (parms.get("t07") !== null) {
      router.replace("/Panel", { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <FullpagePanel adminbridge={adminbridge} />;
}
