import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isstarte: false,
      setTimer: 25,
      updateTimer: '25:00',
    }
  }

  componentDidMount() {
    let {setTimer} = this.state

    const timer = setInterval(() => {
      setTimer -= 1
    }, 1000)
    console.log(timer)
  }

  button = () => {
    this.setState(prevSState => {
      const {isstarte} = prevSState
      return {isstarte: !isstarte}
    })
  }

  IncButton = () => {
    this.setState(prevSState => {
      const {setTimer} = prevSState
      return {setTimer: setTimer + 1}
    })

    this.setState(prevSState => {
      const {setTimer} = prevSState
      return {updateTimer: `${setTimer}:00`}
    })
  }

  onDecButton = () => {
    this.setState(prevSState => {
      const {setTimer} = prevSState
      return {setTimer: setTimer - 1}
    })
    this.setState(prevSState => {
      const {setTimer} = prevSState
      return {updateTimer: `${setTimer}:00`}
    })
  }

  onReset = () => {
    this.setState(prevSState => {
      const {setTimer} = prevSState
      return {updateTimer: `25:00`}
    })
  }

  render() {
    const {isstarte, setTimer, updateTimer} = this.state
    const StartAndPauseImage = isstarte
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
    const StartAndPause = isstarte ? 'Pause' : 'Start'
    const alt = isstarte ? 'pause icon' : ' play icon'
    const RunningStatus = isstarte ? 'Running' : 'Paused'

    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="bg-container-2">
          <div className="image-button-container">
            <div className="timer-comtainer">
              <p className="pargraph">{updateTimer}</p>
              <p className="pargraph">{RunningStatus}</p>
            </div>
          </div>
          <button className="button" type="button" onClick={this.button}>
            <img src={StartAndPauseImage} className="image-button" alt={alt} />
            <p className="pargraph1">{StartAndPause}</p>
          </button>
          <button className="button" type="button" onClick={this.onReset}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
              alt=" reset icon"
              className="image-button"
            />
            <p className="pargraph1">Reset</p>
          </button>
          <br />
          <div className="timer-container">
            <p className="pargraph1">Set Timer limit</p>
            <div className="IncAndDec-container">
              <button
                type="button"
                className="pargraph2"
                onClick={this.onDecButton}
              >
                -
              </button>
              <button type="button" className="button2">
                {setTimer}
              </button>

              <button
                type="button"
                className="pargraph2"
                onClick={this.IncButton}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
