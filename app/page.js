import HomePage from "@/components/Home/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center bg-gradient-to-br sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <HomePage/>
      </main>
    </div>
  );
}
