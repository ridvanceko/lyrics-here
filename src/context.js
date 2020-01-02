//in this provider component we will wrap everything inside of it


import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {

  state = {
    track_list:[
      { track: { track_name: '' } }
      { track: { track_name: '' } }
    ],
    heading: 'Top 10 Tracks'
  }
  render() {
    return (
     <Context.Provider value={this.state}>
       {this.props.children}

     </Context.Provider>
    )
  }
}
