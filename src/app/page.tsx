import Image from "next/image";
import Link from "next/link";
import { subjects } from "@/lib/subjects";

export default function Home() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="font-bold text-[clamp(2rem,6vw,4.2rem)] leading-[1.1]  [:root[dir=rtl]_&]:leading-[1.35]">
            <span className="inline-grid">
              <span
                className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-2xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
                aria-hidden="true"
              >
                STEAM who?
              </span>{" "}
              <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]">
                STEAM who?
              </span>
            </span>
          </h1>
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
