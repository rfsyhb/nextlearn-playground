import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout successful" }, { status: 200 });

  response.cookies.delete('supabase-auth-token');
  response.cookies.delete('supabase-refresh-token');

  return response;
}