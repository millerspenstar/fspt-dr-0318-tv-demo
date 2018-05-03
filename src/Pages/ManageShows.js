import React, { Component } from 'react'
import Show from '../Show'
import './ManageShows.css'
import ReactPropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default class ManageShows extends Component {
    static propTypes = {
        createShow: ReactPropTypes.func.isRequired
    }
    state = {
        show: {
            name: '',
            rating: -1,
            previewImage: '',
        
        },
        shows: [
            {
                name: 'Kung Fu Panda',
                rating: 2,
                previewImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk6siUv3oGQm6iZcGJdS-vdooYKp3A8laiRS6HEkg8JJlIRdiA' }
        ]
    }

    handleOnChange = (event) => {
        if (event.target.id === "nameInput") {
            this.setState({
                newShowName: event.target.value
            })
        } else if (event.target.id === "ratingInput") {
            this.setState({
                newShowRating: Number(event.target.value)
            })
        } else if (event.target.id === "previewImageInput") {
            this.setState({
                newShowPreviewImage: event.target.value
            })
        }
    }

    handleOnClick = () => {
        this.props.createShow({
            name: this.state.newShowName,
            rating: this.state.newShowRating,
            previewImage: this.state.newShowPreviewImage})
        
 
    }

    renderShows= () =>{
            
       

        // for(const show of this.state.shows){
        //     showComponents.push(
        //         <Show key={0} name={show.name} rating={show.rating} previewImage={show.previewImage} />

        //     )
        // }
        
        // for (let i= 0; i< this.state.shows.length; i++) {
        //     const show = this.state.shows[i];

        //     showComponents.push(
        //        <Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage} />
                
                
        //     )
        // }


        // return(
        //     showComponents

        // )

        return this.props.allShows.map((show, i) => {
            return(
                <Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage} />
            )

        })
    }

    getAvgRating = () => {
       const sumOfRatings = this.props.allShows.reduce((accumulator, show)=>{
            return show.rating + accumulator
        }, 0) 

        return sumOfRatings / this.props.allShows.length
    }

    hasEnoughKidShows = () => {
        const minRequiredKidShows = 2

        let showCount = 0
        let remainingshows = this.props.allShows.length
        while (showCount <minRequiredKidShows && remainingshows) {
            remainingshows--

            const show = this.props.allShows[remainingshows]
            if (show.rating ===1) {
                showCount++}
        }

        const result = showCount >= minRequiredKidShows

        return result.toString()
    }

    render() {
        // console.log("STATE", this.state)
        return (
            <div className='manageShows'>
                <section className="viewAllShows">
                    <header>
                        <h1>All Shows</h1>
                        <p>Avg Rating: {this.getAvgRating()}</p>
                        <p>Has Enough Kid Shows: {this.hasEnoughKidShows()}</p>
                        </header>
                    <div>
                        {this.renderShows()}
                    </div>
                    <Link to="/">View Shows</Link>
                </section>
                <section className="createShow">
                    <header><h1>New Show</h1></header>
                    <div>
                        <div><label>Name:</label><input id="nameInput" onChange={this.handleOnChange} /></div>
                        <div><label>Rating:</label><input id="ratingInput" onChange={this.handleOnChange} /></div>
                        <div><label>Preview Image:</label><input id="previewImageInput" onChange={this.handleOnChange} /></div>
                        <button onClick={this.handleOnClick}>Create</button>
                    </div>
                </section>
            </div>
        )
    }
}