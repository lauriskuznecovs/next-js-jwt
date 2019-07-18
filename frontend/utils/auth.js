import axios from 'axios'
import Router from 'next/router'
import { Cookies } from 'react-cookie'
import nextCookie from 'next-cookies'

// set up cookies
const cookies = new Cookies()

export const handleAuthSSR = async ctx => {
  const { token } = nextCookie(ctx)
  const url = `${process.env.API_URL}/api/validate`

  const redirectOnError = () => {
    /* eslint-disable no-console */
    console.log('Redirecting back to main page')
    if (typeof window !== 'undefined') {
      Router.push('/')
    } else {
      ctx.res.writeHead(302, { Location: '/' })
      ctx.res.end()
    }
  }

  try {
    if (!token) {
      return redirectOnError()
    }
    const response = await axios.get(
      url,
      {
        headers: { 'Authorization': token },
      }
    )

    if (!response.data.user) {
      return redirectOnError()
    }
  } catch (error) {
    /* eslint-disable no-console */
    console.log('Error: ', error)
    // Implementation or Network error
    return redirectOnError()
  }
  return {}
}

export const login = async ({ token }) => {
  // Cookie will expire after 24h
  cookies.set('token', token, { maxAge: 60 * 60 * 24 })
}

export const logout = () => {
  cookies.remove('token')
}
