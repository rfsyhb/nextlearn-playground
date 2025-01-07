import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  // Ambil token dari cookies
  const token = req.cookies.get('supabase-auth-token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/supabase/auth/login', req.url));
  }

  // Validasi token
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser(token);
  if (error || !user) {
    return NextResponse.redirect(new URL('/supabase/auth/login', req.url));
  }

  // console.log(user);
  const role = user.user_metadata?.role;

  // Proteksi untuk /admin
  if (
    req.nextUrl.pathname.startsWith('/supabase/protected/admin') &&
    role !== 'admin'
  ) {
    return NextResponse.redirect(new URL('/supabase/protected/user', req.url));
  }

  // Proteksi untuk /user
  if (
    req.nextUrl.pathname.startsWith('/supabase/protected/user') &&
    (role !== 'superman' && role !=='user')
  ) {
    return NextResponse.redirect(new URL('/supabase/protected/admin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/supabase/protected/:path*'],
};
