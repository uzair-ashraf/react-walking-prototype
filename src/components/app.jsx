import React, {Component} from 'react';
import Map from './map';
import Player from './player';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMoving: false,
      intervalId: null,
      playerPosition: {
        x: 0,
        y: 0,
        direction: 'down'
      }
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleMovement.bind(this))
    window.addEventListener('keyup', this.handleStopMovement.bind(this))
    this.startGameLoop()
  }
  startGameLoop() {
    const intervalId = setInterval(this.gameLoop.bind(this), 1000 / 60)
    this.setState({intervalId})
  }
  handleMovement(e) {
    const playerPosition = {...this.state.playerPosition};
    const movements = {
      w: 'up',
      s: 'down',
      a: 'left',
      d: 'right'
    }
    if(movements.hasOwnProperty(event.key)) {
      playerPosition.direction = movements[event.key];
      this.setState({playerPosition, isMoving: true})
    }
  }
  handleStopMovement(e) {
    this.setState({isMoving: false})
  }
  gameLoop() {
    const { isMoving } = this.state
    if(isMoving) {
      const playerPosition = { ...this.state.playerPosition };
      const { direction } = playerPosition;
      const directionLogic = {
        up: () => playerPosition.y++,
        down: () => playerPosition.y--,
        left: () => playerPosition.x++,
        right: () => playerPosition.x--
      }
      directionLogic[direction]()
      this.setState({playerPosition})
    }
  }

  render() {
    const {playerPosition, isMoving} = this.state
    return (
      <div className="container">
        <Map playerPosition={playerPosition}>
          <Player
          isMoving={isMoving}
          direction={playerPosition.direction}
          />
        </Map>
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
        }
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgb(50, 50, 50);
        }
        `}</style>
      </div>
    )
  }
}
