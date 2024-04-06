import { NextRequest } from "next/server";

export async function GET() {
  const apiUrl =
    "https://graph.facebook.com/v19.0/me/accounts?access_token=536271d37a39a422138dac4c6b92c309";
  const res = await fetch(apiUrl);
  const data = await res.json();

  return Response.json({ data });
}
