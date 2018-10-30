import React, {Component} from 'react'
import './Cell.css'

class Cell extends Component {
  render() {
    return(
      <div className={`cell ${this.aliveClass()}`}></div>
    )
  }

  aliveClass () {
    return this.props.alive ? 'alive' : 'dead'
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (this.props.alive !== nextProps.alive)
  }
}

export default Cell
