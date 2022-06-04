import React from "react";
import { Comics } from './Comics';
import { createComic, getComics, updateComic } from "../API";

export default class ComicsList extends React.Component {
    comics = [
        {Title:'Moon Knight Volume 2  Issue #1', Writer: 'Alan Zelenetz', Year: '1985', Summary: 'Summary: Marc Spector, AKA Moon Knight, establishes the Spector International Art Gallery to sell off his most prized possession—a statue of Khonshu. Will Spector abandon the Moon Knight persona for good?'},
        {Title: 'Justice League vs The Suicide Squad Issue #3', Writer: 'Joshua Williamson', Year: '2017', Summary: 'Belle Reve Penitentiary. Headquarters of Task Force X, home to the worst super-criminal scum in the DC Universe and new residence of…the Justice League?! The Suicide Squad delight in showing Earth’s greatest heroes how the other side lives, and you’d better believe the Justice League needs to be restrained to hear the terrible secret Amanda Waller has to tell them.'},
        {Title:  'Watchmen Issue #5', Writer: 'Alan Moore', Year: '1987', Summary: 'While Dr. Manhattan continues his seclusion on Mars, back on Earth, Dan offers Laurie a place to stay while Rorschach continues an investigation of Blakes murder. Plus, a mugger attacks Ozymandias and Moloch offers to come clean'.},
    ];
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
        await this.fetchComics();
    }

    updateComic = async(comic) => {
        await updateComic(comic);
        this.fetchComics();
    }


    render() {
        return (
            <div>
            <h1>Create a comic</h1>
            <form>
                <input
                    type='text'
                    placeholder='title'
                    onChange={(e) => this.setState({ newTitle: e.target.value })}
                    value={ this.state.newTitle }>
                </input>
            </form>
            <button type='submit'
                onClick={this.createComic({ title: this.state.newTitle, issues: [] })}>
                Create Comic
            </button>
            <div className = "comics-list">
                {this.state.comics.map((comic) => {
                    return (
                    <Comics
                    comic={comic}
                    key={comic._id}
                    updateComic={this.updateComic}
                    />);
                })}
            </div>
            </div>
        );
    }
}
