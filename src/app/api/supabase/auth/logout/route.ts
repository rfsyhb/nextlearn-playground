import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Ambil token dari cookies
  const token = req.cookies.get('supabase-auth-token')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Buat instance Supabase dengan token di header
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
    {
      global: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    },
  );

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return NextResponse.json(
        { status: 'fail', message: error.message },
        { status: 500 },
      );
    }

    // Response
    const response = NextResponse.json(
      { status: 'success', message: 'Logout successful' },
      { status: 200 },
    );

    // Delete cookies
    response.cookies.delete({ name: 'supabase-auth-token', path: '/' });
    response.cookies.delete({ name: 'supabase-refresh-token', path: '/' });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: 'fail', message: error.message },
        { status: 500 },
      );
    } else {
      return NextResponse.json(
        { status: 'fail', message: 'An unknown error occurred' },
        { status: 500 },
      );
    }
  }
}
