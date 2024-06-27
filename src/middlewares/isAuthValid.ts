'use server';
import { checkSession } from 'functions';
import { NextRequest } from 'next/server';

export async function isAuthvalid(request: NextRequest) {
  const result = await checkSession(request);
  const newSession = result?.newSession ?? false;
  console.log({ newSession });

  return !!newSession;
}
