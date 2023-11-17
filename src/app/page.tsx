import Image from "next/image";
import Link from "next/link";
import { subjects } from "@/lib/subjects";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">STEAM who?</h1>
          <p className="pt-6 ">
            Pensa a un personaggio STEAM. Vediamo se riesco ad indovinare a chi
            sai pensando!
          </p>

          <div className="dropdown dropdown-hover py-2">
            <label tabIndex={0} className="btn btn-ghost ">
              ...
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 pt-4 shadow bg-base-100 rounded-box w-52 space-y-2"
            >
              <li className="font-bold mb-2">Personaggi disponibili</li>
              <hr />
              {subjects.map((subject) => (
                <li key={subject} className="hover:bg-base-200 px-1 py-1">
                  {subject}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link href="/quiz" className="btn btn-primary">
              VAI AL QUIZ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
