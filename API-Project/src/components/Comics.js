import React from "react"; 

export default class extends React.Component {
    render() {
        const rooms = this.props.data.stories
        ? this.props.data.stories.map((stories, index) => 
        <li>
            {stories.name} Area: {stories.area}
            <button onClick={e =>
           this.props.deleteStory(e, props.data, story)
            }>Delete</button>
        </li>)
        : null;
        return(
            <div>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {stories}
                </ul>
                <NewStoryForm
                    addNewStory={this.props.addNewStory} data={this.props.data} />
            </div>
        ); 
    }
}
// import  { NewComicForm } from './NewComicFOrm';

// export const Comic =(props) => {
//     const { comic, updateComic } = props;

//     const deleteComic = {comicId} => {
//         const updatedComic = {
//             ...comic,
//             stories: comic.stories.filter((x) => x._id !== roomId)
//         };
//         updateComic(updatedComic);
//     }

//     const addNewStory = (room) =>  updateComic({ ...comic,stories: [..comic.stories,comic]})
    
//     const stories = () => (
//         <ul>
//             {comic.stories.map((story, index) => (
//                 <li key={index}>
//                     <label> {'${story.name}Area: ${story.area'}</label>
//                     <button onClick={(e) => deleteStory(story._id)}>Delete</button>
//                 </li>
//             ))}
//         </ul>
//     );

//     return(
//        <div>
//         <h1>{comic.name}</h1>
//         {
//             stories ({stories,comicId: comic._Id, deleteComic})
//         }
//         <NewStoryForm addNewStory={addNewStory} />
//        </div> 
//     );
    

// };