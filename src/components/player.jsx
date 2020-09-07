import React, {Component} from 'react';
import character from '../assets/characters/demon-purple.png';
export default class Player extends Component {
  render() {
    const standingCoords = {
      up: ['-48px', '-145px'],
      down: ['-48px', '0px'],
      left: ['-48px', '-48px'],
      right: ['-48px', '-96px'],
    }
    let x = null;
    let y = null;
    const { isMoving, direction} = this.props
    if(isMoving) {
      // walk loop logic
    } else {
      const coords = standingCoords[direction];
      x = coords[0];
      y = coords[1];
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
