import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import './App.css'
import ViewShows from './Pages/ViewShows'

class App extends Component {
  state= {
    shows: [
      {
          name: 'Kung Fu Panda',
          rating: 2,
          previewImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6siUv3oGQm6iZcGJdS-vdooYKp3A8laiRS6HEkg8JJlIRdiA' }
  ]
  }

  createShow = (show) => {
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)
     
          return{
              shows:existingShows
          }
      }
  )

  }

  render() {
    return (
      <Router>
      <div className="App">
        <ViewShows allShows={this.state.shows}/>
        <ManageShows allShows={this.state.shows} createShow={this.createShow}/>
        <Switch>
          <Route exact path="/" component={() =><ViewShows allShows={this.state.shows}/>}/>
          <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.createShow}/>}/>
        </Switch>
      </div>
      </Router>
    )
  }
}

export default App
