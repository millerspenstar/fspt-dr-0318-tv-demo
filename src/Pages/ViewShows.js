import React, {Component} from 'react'
import './ViewShows.css'
import Show from '../Show'
import ReactPropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class ViewShows extends Component {
    static propTypes = {
        allShows: ReactPropTypes.array.isRequired
    }


   renderShows= () => {
       return this.props.allShows.map((show, i)=> {
            return (<Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage}/>)
       })
   }
   
    render() {
        return(
            <main className="viewShows">
                <section className="availableShows">
                <header><h3>Available Shows</h3></header>
                    {this.renderShows()}
                    <Link to="/ManageShows">Manage Shows</Link>
                </section>
                <section className="currentShow">

                </section>
            </main>
        )
    }
}