import React, { Component } from 'react'

import Navigation from '../components/Navigation'
import { logout } from '../utils/auth'

export default class Logout extends Component {
  static async getInitialProps(ctx) {
    await logout()
    return {}
  }

  render() {
    return (
      <div>
        <h1>You are logged out</h1>
        <p>Go to home page</p>
        <Navigation />
      </div>
    )
  }
}
