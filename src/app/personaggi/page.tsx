import Personaggi from "@/components/Personaggi";

function page() {
  return (
    <>
      <h1 className="absolute top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 font-bold text-[clamp(3rem,6vw,4.2rem)] leading-[1.1]  [:root[dir=rtl]_&]:leading-[1.35] ">
        <span className="inline-grid">
          <span
            className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text blur-2xl [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"
            aria-hidden="true"
          >
            ███████
          </span>{" "}
          <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,theme(colors.error)_0%,theme(colors.secondary)_9%,theme(colors.secondary)_42%,theme(colors.primary)_47%,theme(colors.accent)_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,oklch(var(--s))_4%,color-mix(in_oklch,oklch(var(--s)),oklch(var(--er)))_22%,oklch(var(--p))_45%,color-mix(in_oklch,oklch(var(--p)),oklch(var(--a)))_67%,oklch(var(--a))_100.2%)]"></span>
        </span>
      </h1>
      <Personaggi />
    </>
  );
}

export default page;
