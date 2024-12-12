"use client";

import dynamic from "next/dynamic";

const Demo = dynamic(() => import("~/components/Demo"), {
  ssr: false,
});
import GameProvider from "~/context/game-context";

export default function App(
  { title }: { title?: string } = { title: "Play 2048 in Farcaster FrameV2" }
) {
  return (
    <GameProvider>
      <Demo title={title} />
    </GameProvider>
  );
}