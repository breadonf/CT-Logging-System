import { NextRequest, NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname, origin } = req.nextUrl;
  console.log(pathname);
  if (pathname == "/") {
    return NextResponse.rewrite(`${origin}/message`);
  }
  return NextResponse.next();
}
