import React from 'react'
import Link from 'next/link'

export default () => (
  <>
    <h2>Pages:</h2>
    <ul>
      <li>
        <Link href="/">
          <a>Main page</a>
        </Link>
      </li>
      <li>
        <Link href="/secret">
          <a>Secret page</a>
        </Link>
      </li>
      <li>
        <Link href="/logout">
          <a>Logout page</a>
        </Link>
      </li>
    </ul>
  </>
)
