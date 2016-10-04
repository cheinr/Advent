import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'



export class Container extends React.Component {
	const apiKey = AIzaSyA9PyMi9CT7ZuWBBI6k4E9FIaLiiN8KSAA
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>
        <Map google={this.props.google}
          />
      </div>
    )
  }
}

export default GoogleAPIComponent({
	const apiKey = AIzaSyA9PyMi9CT7ZuWBBI6k4E9FIaLiiN8KSAA
  apiKey: __GAPI_KEY__
})(Container)