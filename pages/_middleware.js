import { NextRequest, NextResponse } from "next/server";

export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect("/message");
  }
  return NextResponse.next();
}
