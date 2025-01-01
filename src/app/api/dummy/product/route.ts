import { products } from '@/data/dummy/product';
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'Product data fetched successfully',
    status: "success",
    data: products,
  }, { status: 200 });
}
