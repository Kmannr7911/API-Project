import React from "react";
import { Comics } from './Comic';
import { comicAPI } from '../rest/ComicsAPI.js';
import { async } from "jshint/src/prod-params";

export default class ComicsList extends React.Component {
    state = {
        comics = []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchComics = async () => {
        const comics = await comicsAPI.get();
        this.setState{{ comics }};
    };

    updateComic = async(updatedComic) => {
        await housesAPI.put(updatedComic);
        this.fetchComics();
    }

    render() {
        return {
            <div className = "comics-list">
                {this.state.comics.map(comic) => {
                    <Comics
                    comic={comic}
                    key={comic._id}
                    updateComic={this.updateComic}
                    />
                }}
            </div>
        }
    }
}
