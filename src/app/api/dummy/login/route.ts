import { generateToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Dummy login
    if (username === 'admin' && password === 'admin') {
      const token = generateToken({ username: 'admin' });

      // Return token to the client
      return NextResponse.json({ status: 'success', message: 'Login successful', data: { token } }, { status: 200 });
    } else {
      return NextResponse.json({ status: 'fail', message: 'Invalid credentials' }, { status: 401 });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ status: 'fail', message: error.message }, { status: 500 });
    }
    
    return NextResponse.json({ status: 'fail', message: 'An unknown error occurred' }, { status: 500 });
  }
}