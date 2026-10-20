import { Suspense } from "react";
import { SearchPage } from "@/views/SearchPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-500">Memuat pencarian...</div>}>
      <SearchPage />
    </Suspense>
  );
}
