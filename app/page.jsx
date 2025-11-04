"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/luxesculpt");
  }, [router]);

  return (
    <main className="flex items-center justify-center h-screen bg-black text-white text-center">
      <h1 className="text-lg opacity-70">
        Redirecting to LuxeSculpt™...
      </h1>
    </main>
  );
}





















































