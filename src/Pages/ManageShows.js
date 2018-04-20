import React, { Component } from 'react'
import Show from '../Show'

export default class ManageShows extends Component {
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
        this.setState((prev) => {
            const existingShows = prev.shows
            existingShows.push(
            {
                    name: prev.newShowName,
                    rating: prev.newShowRating,
                    previewImage: prev.newShowPreviewImage
                })
                return{
                    shows:existingShows
                }
            }
        )
    }

    renderShows= () =>{
            
            const showComponents = [
           
                

        ]

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

        return this.state.shows.map((show, i) => {
            return(
                <Show key={i} name={show.name} rating={show.rating} previewImage={show.previewImage} />
            )

        })
    }

    render() {
        // console.log("STATE", this.state)
        return (
            <div>
                <section className="viewAllShows">
                    <header><h1>All Shows</h1></header>
                    <div>
                        {this.renderShows()}
                    </div>
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