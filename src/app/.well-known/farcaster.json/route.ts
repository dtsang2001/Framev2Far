export async function GET() {
  const appUrl = process.env.NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      "header": "eyJmaWQiOjM2ODc1NywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDgxNjFiMjZmYkExYTNlQUZCYTAxMzAzMDZkYzlhODZBQjE4Y2QxMDMifQ",
      "payload": "eyJkb21haW4iOiJodHRwczovL2dhbWUtMjA0OC1ieS1kYW5ncy52ZXJjZWwuYXBwLyJ9",
      "signature": "MHgxMzg3Nzk1MjliZWNjYzMwOWJkZmFiNGZkNzE3ODg4NWU1OTk5NjUxYjQ5NDNlYWQ4YTA1ODAyNDcyNTBhNmVlNGJiNGFmZWQ1YjQ1ZmYyY2I4MTE5OWQ0YjQ0YzBlMTA5OWNkZDJhMDEyNTVmYWNjNmM0MWZjNTI2YTQ4YmE2MTFi"
    },
    frame: {
      version: "0.0.1",
      name: "Play 2048 in Farcaster",
      iconUrl: `${appUrl}/icon.png`,
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#8e71a7",
      homeUrl: appUrl,
      webhookUrl: `${appUrl}/webhook`
    },
  };

  return Response.json(config);
}
