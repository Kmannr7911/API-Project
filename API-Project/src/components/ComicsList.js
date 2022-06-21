import React from "react";
import { createComic, getComics, updateComic, deleteComic } from "../API";
import Comic from "./Comic";

export default class ComicsList extends React.Component {
    state = {
        comics: [ ],
        newTitle: ''
    };

    componentDidMount() {
        this.fetchComics();
    }

    fetchComics = async () => {
        const comics = await getComics();
        this.setState({ comics });
        // this.state.comics.setState({comics});
    };

    createComic = async(comic) => {
        await createComic(comic);
        this.fetchComics();
    }

    updateComic = async(comic) => {
        console.log('update', comic);
        await updateComic(comic);
        this.fetchComics();
    }

    deleteComic = async(id) => {
        await deleteComic(id)
        this.fetchComics();
    }


    render() {
        return (
            <div>
            <h1>Comic Books</h1>
            <form>
                <input
                    type='text'
                    placeholder='title'
                    onChange={(e) => this.setState({ newTitle: e.target.value })}
                    value={ this.state.newTitle }>
                </input>
          
            <button type='update'
                onClick={() => this.createComic({ title: this.state.newTitle})}>
                update
            </button>
            <div className = "comics-list">
                {this.state.comics.map((comic) => {
                    return (
                        <Comic comic = {comic}/>
                    )

                
                
                })}              
            </div>
            </form>
            
            </div>
        );
    }
}

//how does the data get displayed if the set.state is present?