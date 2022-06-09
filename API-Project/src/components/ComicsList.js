import React from "react";
import { createComic, getComics, updateComic } from "../API";

export default class ComicsList extends React.Component {
    state = {
        comics: [],
        newTitle: ''
    };

    componentDidMount() {
        this.fetchComics();
    }

    fetchComics = async () => {
        const comics = await getComics();
        this.setState({ comics });
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
          
            <button type='submit'
                onClick={() => this.createComic({ title: this.state.newTitle})}>
                Submit
            </button>
            <div className = "comics-list">
                {this.state.comics.map((comic) => {
                    return (
                        <p>
                            {comic.title}
                        </p>)
                })}              
            </div>
            </form>
            </div>
        );
    }
}
