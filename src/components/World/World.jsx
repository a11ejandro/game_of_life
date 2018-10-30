import React, { Component } from 'react'
import Cell from '../Cell/Cell'
import './World.css'

class World extends Component {
  static getDeriveStateFromProps (newProps, currentState) {
    return {
      world: newProps.world
    }
  }

  constructor (props) {
    super(props)

    this.interval = undefined
  }

  componentDidMount () {
    this.props.setRandomWorld()
    this.interval = setInterval(this.props.tickWorld, 100)
  }

  render () {
    return (
      <div id='world'>
        { this.props.world.map(this.renderRow) }
      </div>
    )
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  renderRow = (row, index) => {
    return (
      <div className='row' key={index}>
        { row.map(this.renderCell) }
      </div>
    )
  }

  renderCell = (value, index) => {
    return (
      <Cell key={index} alive={value}/>
    )
  }
}

export default World
