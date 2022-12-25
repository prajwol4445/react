import React, { Component } from 'react'
import ErrorBoundry from './ErrorBoundry'

export default class ErrorBoundryMain extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry message="bad"></ErrorBoundry>
      </div>
    )
  }
}
