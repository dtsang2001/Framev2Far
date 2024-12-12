export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    "accountAssociation": {
      "header": "eyJmaWQiOjM2ODc1NywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDgxNjFiMjZmYkExYTNlQUZCYTAxMzAzMDZkYzlhODZBQjE4Y2QxMDMifQ",
      "payload": "eyJkb21haW4iOiJnYW1lLTIwNDgtYnktZGFuZ3MudmVyY2VsLmFwcCJ9",
      "signature": "MHhlN2QxYmI4YmJhMzRkNTUxMmEwM2VhYmUyMTdlODY0NTI5N2EzNmNiZmVkOWQwYmE2N2U4ZWVjOWRhN2U1YzdkNmY4MmFkODgyZjExNDQ3OWQ5MWE1ZTI3N2FmYWEzMjNjZjBkYWU2YWRkMGQzYWU4MDZhOTZmMTRmZjViNTMyMTFj"
    },
    frame: {
      version: "0.0.1",
      name: "Play 2048 in Farcaster",
      iconUrl: `https://game-2048-by-dangs.vercel.app/icon.png`,
      splashImageUrl: `https://game-2048-by-dangs.vercel.app/splash.png`,
      splashBackgroundColor: "#8e71a7",
      homeUrl: "https://game-2048-by-dangs.vercel.app",
      webhookUrl: `https://game-2048-by-dangs.vercel.app/webhook`
    },
  };

  return Response.json(config);
}
