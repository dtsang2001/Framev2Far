import { ImageResponse } from "next/og";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <img src="https://game-2048-by-dangs.vercel.app/background.jpg" alt="bg" />
    ),
    {
      ...size,
    }
  );
}
