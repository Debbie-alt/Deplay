import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-slate-300 flex min-h-screen flex-col items-center justify-between p-24">
      <h6 className="font-bold text-xl">My DEPLAY MUSIC STREAMING APP BUILT WITH NEXT.JS</h6>
      <Button>
        <Link href='/page2'>GO HOME</Link>
      </Button>
    </main>
  );
}
