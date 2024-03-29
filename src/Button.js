import React from 'react'
import './App.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className='control'>
          <button className={`${this.props.show}`} onClick={this.props.reset}>
            RESET
          </button>

          <button className='quit' onClick={this.props.quit}>
            QUIT
          </button>
        </div>
        <div className='contain-buttons'>
          <div className='sorting'>
            <button
              onClick={this.props.bubble}
              className={`sort ${this.props.show}`}
            >
              Bubble
            </button>
            <button
              onClick={this.props.selection}
              className={`sort ${this.props.show}`}
            >
              Selection
            </button>
            <button
              onClick={this.props.insertion}
              className={`sort ${this.props.show}`}
            >
              Insertion
            </button>
          </div>
          <div className='sorting'>
            <button
              onClick={this.props.quick}
              className={`sort ${this.props.show}`}
            >
              Quick
            </button>
            <button
              onClick={this.props.merge}
              className={`sort ${this.props.show}`}
            >
              Merge
            </button>
            <button
              onClick={this.props.heap}
              className={`sort false ${this.props.show}`}
            >
              Heap
            </button>
          </div>
        </div>
      </div>
    )
  }
}
