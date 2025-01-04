import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      return NextResponse.json(
        { status: 'fail', message: error.message },
        { status: 401 },
      );
    }

    const { access_token, refresh_token } = data.session || {};

    if (!access_token || !refresh_token) {
      return NextResponse.json(
        { status: 'fail', message: 'Token missing' },
        { status: 500 },
      );
    }

    // Save to cookies
    const response = NextResponse.json(
      { status: 'success', message: 'Login successful', data: data.user },
      { status: 200 },
    );

    response.cookies.set('supabase-auth-token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    response.cookies.set('supabase-refresh-token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json(
        { status: 'fail', message: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { status: 'fail', message: 'An unknown error occurred' },
      { status: 500 },
    );
  }
}
