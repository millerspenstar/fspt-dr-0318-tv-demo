import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ManageShows from './Pages/ManageShows'
import './App.css'
import ViewShows from './Pages/ViewShows'

class App extends Component {
  state = {
    shows: []
  }

  createShow = (show) => {
    this.setState((prev) => {
      const existingShows = prev.shows
      existingShows.push(show)

      return {
        shows: existingShows
      }
    }
    )

  }

  testPromises = () => {
    console.log('testing some promises')
    new Promise((resolve, reject) => {
      const success = false
      setTimeout(() => {
        if (success)
          resolve('promise was succesful')
        else
          reject('promise failed in the utmost heinous manner possible')
      }, 1000)

    })
      .then((value) => { console.log(value) })
      .catch((error) => { console.log(error) })
    console.log('finished executing promise')
  }

  getShows = async () => {
    try {
      const response = await fetch('http://localhost:3001/shows')
      const shows = await response.json()
      this.setState({ shows })
    }
    catch (error) {
      this.setState({ errorMessage: error })
    }
  }

  postShow = async (showToSave) => {
    console.log(showToSave)
    const postInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(showToSave)
    }
    try {
      const postResp = await fetch('http://localhost:3001/shows', postInit)
      const show = await postResp.json()
      this.createShow(show)
    }
      catch (error)  {
      this.setState({ errorMessage: error })
    }


  }

  renderError = () => {

    return this.state.errorMessage
      ? (<div>{this.state.errorMessage.toString()})</div>)
      : (<div></div>)
  }

  componentDidMount() {
    // this.testPromises()
    this.getShows()
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.renderError()}
          <Switch>
            <Route exact path="/" component={() => <ViewShows allShows={this.state.shows} />} />
            <Route path="/manageShows" component={() => <ManageShows allShows={this.state.shows} createShow={this.postShow} />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
