import { Metadata } from "next";
import App from "./app";

const appUrl = process.env.NEXT_PUBLIC_URL;

const frame = {
  version: "next",
  imageUrl: `${appUrl}/opengraph-image?v=1`,
  button: {
    title: "Play 2048 in Farcaster",
    action: {
      type: "launch_frame",
      name: "Play 2048 in Farcaster",
      url: appUrl,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#581C87",
    },
  },
};

export const revalidate = 300;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Play 2048 in Farcaster",
    openGraph: {
      title: "Play 2048 in Farcaster",
      description: "Play 2048 in Farcaster FrameV2 - By dangs.eth",
    },
    other: {
      "fc:frame": JSON.stringify(frame),
    },
  };
}

export default function Home() {
  return (<App />);
}
