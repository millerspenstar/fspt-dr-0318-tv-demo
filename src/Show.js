import React, { Component } from 'react'
import ReactPropTypes from 'prop-types'
import './Show.css'

export default class Show extends Component {
    static propTypes ={
        name: ReactPropTypes.string.isRequired,
        rating: ReactPropTypes.number.isRequired,
        previewImage: ReactPropTypes.string.isRequired

    }

    render() {
        return (
            <article>
                <header><h3>{this.props.name}</h3></header>
                <p> Rating:{this.props.rating}</p>
                <img src={this.props.previewImage} alt='unknown' />
            </article>
        )
    }
}

Show.propTypes = {
    name: ReactPropTypes.string.isRequired,
    rating: ReactPropTypes.number.isRequired,
    previewImage: ReactPropTypes.string.isRequired
}