import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubcribe: true,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubcribe: !prevState.isSubcribe}))
  }

  render() {
    const {isSubcribe} = this.state

    return (
      <div className="bgContainer">
        <h1 className="heading">Welcome</h1>
        <p className="text">Thank you! Happy Learning</p>
        {isSubcribe && (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        )}
        {!isSubcribe && (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
