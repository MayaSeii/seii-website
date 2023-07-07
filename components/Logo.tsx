import React from 'react'

const Logo = () =>
{
  return (

    <svg className='logo-path' version='1.0' xmlns='http://www.w3.org/2000/svg'
      width='40px' height='40px' viewBox='0 0 256.000000 256.000000'
      preserveAspectRatio='xMidYMid meet'>

      <g transform='translate(0.000000,256.000000) scale(0.100000,-0.100000)' stroke='none'>

        <linearGradient id='mainGradient' x1='0%' y1='0%' x2='1000%' y2='10%' gradientUnits='userSpaceOnUse'>
          <stop offset='0%' stopColor='#e653a1' />
          <stop offset='70%' stopColor='#e6537d' />
        </linearGradient>

        <linearGradient id='iconGradient'>
          <stop offset='10%' stopColor='#e653a1' />
          <stop offset='90%' stopColor='#ed694b' />
        </linearGradient>

        <linearGradient id='diagonalGradient' gradientTransform='rotate(45)'>
          <stop offset='0%' stopColor='#e653a1' />
          <stop offset='100%' stopColor='#ed694b' />
        </linearGradient>

        <path d='M2356 2491 l-58 -59 -122 5 c-158 7 -217 -8 -288 -75 -58 -54 -107
        -144 -115 -211 -5 -43 -14 -58 -83 -134 -129 -142 -170 -233 -170 -382 l0 -82
        131 -74 c72 -40 144 -87 160 -103 47 -48 52 -154 9 -208 l-19 -25 70 -69 c58
        -57 69 -74 69 -102 0 -42 -40 -82 -83 -82 -24 0 -47 17 -116 84 l-86 85 -170
        -96 c-93 -52 -172 -97 -175 -100 -3 -2 58 -66 135 -142 147 -145 196 -178 302
        -206 350 -91 671 249 563 596 -29 97 -69 150 -235 319 -84 85 -156 165 -160
        178 -11 37 12 85 68 139 48 47 57 51 111 56 62 6 161 49 206 90 94 84 129 215
        100 382 l-8 50 64 65 64 66 -48 47 c-26 26 -50 47 -53 47 -2 0 -31 -27 -63
        -59z'/>
        <path d='M525 1929 c-324 -41 -501 -386 -349 -679 28 -54 92 -124 369 -407
        341 -348 348 -357 329 -408 -9 -23 -61 -47 -87 -39 -12 3 -85 68 -162 144
        -119 116 -149 140 -198 158 -120 45 -245 20 -340 -68 l-52 -49 250 -250 c279
        -278 309 -299 453 -321 239 -37 472 124 523 361 25 118 -4 266 -71 365 l-30
        43 -37 -16 c-50 -20 -130 -13 -170 15 -48 34 -63 77 -63 183 l0 93 -190 191
        c-163 164 -190 196 -190 221 0 41 36 74 80 74 29 0 49 -15 167 -132 l133 -132
        0 191 c0 198 5 231 42 271 l22 22 -30 31 c-94 101 -253 156 -399 138z'/>
        <path d='M1022 1648 c-9 -9 -12 -107 -12 -379 0 -326 2 -369 16 -384 9 -9 24
        -13 32 -10 9 3 117 62 241 132 447 249 446 248 420 279 -6 7 -41 30 -77 50
        -37 20 -182 101 -323 180 -141 79 -263 144 -271 144 -8 0 -19 -5 -26 -12z'/>

      </g>

    </svg>

  )
}

export default Logo;