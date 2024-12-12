import { ImageResponse } from "next/og";

export const alt = "Farcaster Frames V2 Demo";
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

const appUrl = process.env.NEXT_PUBLIC_URL;
const bg = `${appUrl}/background.jpg`

export default async function Image() {
  return new ImageResponse(
    (
      <img src={bg} alt={"bg"} />
    ),
    {
      ...size,
    }
  );
}
