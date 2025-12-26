import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasAllowedEmail: !!process.env.ALLOWED_USER_EMAIL,
    allowedEmailLength: process.env.ALLOWED_USER_EMAIL?.length || 0,
    hasGoogleClientId: !!process.env.GOOGLE_CLIENT_ID,
    hasGoogleSecret: !!process.env.GOOGLE_CLIENT_SECRET,
    hasNextAuthUrl: !!process.env.NEXTAUTH_URL,
    nextAuthUrl: process.env.NEXTAUTH_URL,
    hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
    hasDatabaseUrl: !!process.env.DATABASE_URL,
  });
}
