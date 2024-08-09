
import { NextResponse } from 'next/server'


export async function middleware(request) {
  const { nextUrl } = request;
  const goingRout = nextUrl.pathname;

  if (goingRout === '/buisiness-lines' || goingRout === '/buisiness-lines/engineering-constraction') {
    return NextResponse.redirect(new URL('/buisiness-lines/engineering-constraction/prestigius-projects', request.url))
  }
  if (goingRout === '/buisiness-lines/water-proof-flooring-facilities') {
    return NextResponse.redirect(new URL('/buisiness-lines/water-proof-flooring-facilities/prestigius-projects', request.url))
  }
  if (goingRout === '/buisiness-lines/mepi') {
    return NextResponse.redirect(new URL('/buisiness-lines/mepi/prestigius-projects', request.url))
  }

  if (goingRout === '/about') {
    return NextResponse.redirect(new URL('/about/our-journey', request.url))
  }

  if (goingRout === '/xyz/admin/login') {
    return NextResponse.next();
  }

  if (goingRout.startsWith('/xyz/admin')) {
    const token = request.cookies.get('token')?.value;
    const response = await fetch(process.env.SERVER_URL + `/admin/checkAdmin?token=${token}`, { cache: 'no-store' });
    
    if (!response.ok) {
      // This will activate the closest `error.js` Error Boundary
      return NextResponse.redirect(new URL('/xyz/admin/login', request.url))
    }

    return NextResponse.next();
  }

  return NextResponse.next();

}

export const config = {
  matcher: ['/buisiness-lines', '/buisiness-lines/engineering-constraction', '/buisiness-lines/water-proof-flooring-facilities', '/buisiness-lines/mepi', '/about', '/xyz/:path*'],
}
