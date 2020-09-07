import React, {Component} from 'react';
import character from '../assets/characters/demon-purple.png';
export default class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intervalId: null,
      steps: 0,
      playerCoords: {
        x: null,
        y: null
      }
    }
    this.walkingCoords = {
      down: [['0px', '0px'], ['-96px', '0px']],
      left: [['0px', '-48px'], ['-96px', '-48px']],
      right: [['0px', '-96px'], ['-96px', '-96px']],
      up: [['0px', '-145px'], ['-96px', '-145px']],
    }
    this.standingCoords = {
      up: ['-48px', '-145px'],
      down: ['-48px', '0px'],
      left: ['-48px', '-48px'],
      right: ['-48px', '-96px'],
    }
  }
  walkingLoop() {
    const { direction } = this.props
    const coords = this.walkingCoords[direction]
    let { steps } = this.state
    let x = null
    let y = null
    if(steps % 2) {
      [x, y] = this.walkingCoords[direction][0]
    } else {
      [x, y] = this.walkingCoords[direction][1]
    }
    steps++
    this.setState({
      playerCoords: { x, y },
      steps
    })
  }
  render() {
    let x = null;
    let y = null;
    const { isMoving, direction} = this.props
    if(isMoving) {
      // walk loop logic
      if (this.state.intervalId) {
        x = this.state.playerCoords.x
        y = this.state.playerCoords.y
      } else {
        const intervalId = setInterval(this.walkingLoop.bind(this), 200)
        this.setState({intervalId})
      }
    } else {
      if(this.state.intervalId) {
        clearInterval(this.state.intervalId)
        this.setState({intervalId: null})
      } else {
        [x, y] = this.standingCoords[direction];
      }
    }
    return (
      <>
      <div className='player'>
      </div>
      <style jsx>{`
        .player {
          height: 48px;
          width: 48px;
          background-image: url('${character}');
          background-repeat: no-repeat;
          background-position: ${`${x} ${y}`};
        }
      `}</style>
      </>
    )
  }
}
