import { logger } from '@/lib/logger';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_KEY!,
  );

  // Ambil token dari cookies
  const token = req.cookies.get('supabase-auth-token')?.value;
  if (!token) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Validasi token ke Supabase
  const { data: user, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Ambil data lesson
  const { data: lessons, error: lessonsError } = await supabase
    .from('lessons')
    .select('*');
  if (lessonsError) {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 },
    );
  }

  return NextResponse.json(
    { status: 'success', data: lessons },
    { status: 200 },
  );
}

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

  // Validasi token ke Supabase
  const { data: user, error } = await supabase.auth.getUser(token);
  if (error || !user) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  // Ambil data lesson dari body
  const { title, lesson } = await req.json();
  logger([title, lesson]); // Debugging
  if (!title || !lesson) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
  }

  // Insert data lesson
  const { error: insertError } = await supabase
    .from('lessons')
    .insert({ title, lesson });
  if (insertError) {
    return NextResponse.json({ message: insertError.message }, { status: 500 });
  }

  return NextResponse.json(
    { status: 'success', message: 'Insert lesson successful' },
    { status: 200 },
  );
}
