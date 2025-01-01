import { products } from "@/data/dummy/product";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(products)
}