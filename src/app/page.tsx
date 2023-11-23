import Image from "next/image";
import Link from "next/link";
import { subjects } from "@/lib/subjects";

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">STEAM who?</h1>
          <p className="pt-6 ">
            Pensa a un personaggio STEAM. Vediamo se riesco ad indovinare a chi
            sai pensando!
          </p>

          <div className="py-6">
            <Link href="/personaggi" className="btn btn-primary">
              VAI AL QUIZ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
