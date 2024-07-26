import { NextResponse } from 'next/server'

export function middleware(request) {
  const { nextUrl } = request;
  const goingRout = nextUrl.pathname;

  console.log(goingRout)

  if (goingRout === '/buisiness-lines' || goingRout === '/buisiness-lines/engineering-constraction') {
    return NextResponse.redirect(new URL('/buisiness-lines/engineering-constraction/prestigius-projects', request.url))
  }
  if (goingRout === '/buisiness-lines/integrated-facilities-management-oman') {
    return NextResponse.redirect(new URL('/buisiness-lines/integrated-facilities-management-oman/prestigius-projects', request.url))
  }
  if (goingRout === '/buisiness-lines/mepi') {
    return NextResponse.redirect(new URL('/buisiness-lines/mepi/prestigius-projects', request.url))
  }


  if (goingRout === '/about') {
    return NextResponse.redirect(new URL('/about/our-journey', request.url))
  }


  //return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/buisiness-lines', '/buisiness-lines/engineering-constraction', '/buisiness-lines/integrated-facilities-management-oman', '/buisiness-lines/mepi', '/about'],
}
