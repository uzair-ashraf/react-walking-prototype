import React, {Component} from 'react';
import img from '../assets/maps/dig-site.png';
export default class Map extends Component {

  render() {
    const {x, y} = this.props.playerPosition
    return (
      <>
      <div className='map'>
        {this.props.children}
      </div>
    <style jsx>{`
      .map {
        width: 320px;
        height: 240px;
        border: 2px solid red;
        transform: scale(2);
        image-rendering: pixelated;
        background-image: url('${img}');
        background-color: black;
        background-position: ${`${x}px ${y}px`};
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center
      }
    `}</style>
    </>
    )
  }
}
