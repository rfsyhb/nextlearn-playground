import { todos } from "@/data/dummy/todo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(todos)
}