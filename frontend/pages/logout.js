import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import { logout } from '../utils/auth'

export default class Logout extends Component {
  static async getInitialProps() {
    await logout()
    return {}
  }

  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <p>Go to main page to log in again or try secured page</p>
        <Navigation />
      </div>
    )
  }
}
