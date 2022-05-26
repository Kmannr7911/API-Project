import React from "react"; 
import  { NewComicForm } from './NewComicFOrm';

export const Comic =(props) => {
    const { comic, updateComic } = props;

    const deleteComic = {comicId} => {
        const updatedComic = {
            ...comic,
            stories: comic.stories.filter((x) => x._id !== roomId)
        };
        updateComic(updatedComic);
    }

    const addNewStory = (room) =>  updateComic({ ...comic,stories: [..comic.stories,comic]})
    
    const stories = () => (
        <ul>
            {comic.stories.map((story, index) => (
                <li key={index}>
                    <label> {'${story.name}Area: ${story.area'}</label>
                    <button onClick={(e) => deleteStory(story._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );

    return(
       <div>
        <h1>{comic.name}</h1>
        {
            stories ({stories,comicId: comic._Id, deleteComic})
        }
        <NewStoryForm addNewStory={addNewStory} />
       </div> 
    );
    

};