import Link from 'next/link'

const Navigation = () => (
  <>
    <h2>Pages:</h2>
    <ul>
      <li>
        <Link href="/">
          <a>Main page</a>
        </Link>
      </li>
      <li>
        <Link href="/secured">
          <a>Secured page</a>
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

export default Navigation
