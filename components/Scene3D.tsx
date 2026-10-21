import dynamic from "next/dynamic";

const Scene3DClient = dynamic(() => import("./Scene3DClient"), {
  ssr: false,
  loading: () => (
    <div className="relative flex h-[320px] min-w-0 w-full items-center justify-center sm:h-[480px] lg:h-[640px]">
      <div className="h-8 w-8 rounded-full border-2 border-[#d7d1c5] border-t-[#f06432] animate-spin" />
    </div>
  ),
});

export default function Scene3D() {
  return <Scene3DClient />;
}
