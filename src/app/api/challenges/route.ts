import { NextResponse } from 'next/server';
import { challenges } from './data';

export async function GET() {
  return NextResponse.json({ challenges });
}
