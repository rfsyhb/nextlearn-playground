import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase.from('public_comments').select('*');

  if (error) {
    return NextResponse.json(
      { status: 'fail', message: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ status: 'success', data }, { status: 200 });
}
