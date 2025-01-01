import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/jwt';

/**
 * Supaya route handler menggunakan runtime Node.js,
 * bukan Edge Runtime:
 */
export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json(
      { status: 'fail', message: 'Unauthorized' },
      { status: 401 },
    );
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>
  if (!token) {
    return NextResponse.json(
      { status: 'fail', message: 'Token malformed' },
      { status: 401 },
    );
  }

  // Verifikasi di Node.js runtime
  const { valid, error } = verifyToken(token);
  if (!valid) {
    return NextResponse.json(
      { status: 'fail', message: `Invalid or expired token, ${error}` },
      { status: 401 },
    );
  }

  // Jika valid, lanjut
  return NextResponse.json(
    { status: 'success', message: 'Protected route accessed.' },
    { status: 200 },
  );
}
