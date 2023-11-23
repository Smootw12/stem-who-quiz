"use client";
import { subjects } from "@/lib/subjects";
import Link from "next/link";

function Personaggi() {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold py-4">
            Pensa a uno dei personaggi disponibili
          </h1>
          <div className="flex min-w-[500px] flex-wrap space-x-1">
            {subjects.map((subject, idx) => {
              switch (idx % 3) {
                case 0:
                  return (
                    <div className="badge badge-neutral text-xl py-4 px-4">
                      {subject}
                    </div>
                  );

                case 1:
                  return (
                    <div className="badge badge-secondary text-xl py-4 px-4">
                      {subject}
                    </div>
                  );
                case 2:
                  return (
                    <div className="badge badge-primary text-xl py-4 px-4">
                      {subject}
                    </div>
                  );
              }
            })}
          </div>
          <h1 className="text-xl font-bold py-4">e presto tanti altri...</h1>
          <Link href="/quiz" className="btn btn-accent">
            FATTO!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Personaggi;
