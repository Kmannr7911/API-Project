// import logo from './logo.svg';
// import './App.css';
// import { updateComics, createComics, deleteComics } from './API';

// // create a form component to gather house data
// /* in the onClick of a submit button, 
// call createHouse with the data from the form */
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React , { Component } from 'react';
import './App.css';
// import { Comic } from './components/Comics';

// const COMICS_ENDPOINT = 'https://crudcrud.com/api/7fc3e65760214ada9d75cd58022fb8de://';

// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.addNewStory = this.addNewStory.bind(this);
//     this.deleteStory = this.deleteStory.bind(this);
//   }

//   render () {
//     const comics = this.state
//     ? this.state.comics.map((comic, index) => 
//       <Comic
//       key={index}
//       data={comic}
//       addNewStory= {this.addNewStory}
//       deleteStory= {this.deleteStory} />)
//       : null;
//       return(
//         <div>
//           {comics}
//         </div>
//       );
//   }

//       componentDidMount(){
//         fetch(COMICS_ENDPOINT)
//         .then(res => res.json())
//         .then(data => {
//           this.setState({
//             comics: data
//           });
//         });
//       }
  
//       deleteStory(e, comic, story) {
//         const index = comic.story.indexOf(story);
//         comic.story.splice(index, 1);
//         updateComic(comic)
//           .then(()=> 
//            for(let c of state.comic){
//               if(c,id == comic._id) {
//                 let c = comic:
//                 break;
//               }
//             }
//             return state
//           });
//       });
//     }

//     addStory(e, comic, story) {
//       comic.stories.push(story)
//       updateComic(comic)
//         .then(()=> 
//           for(let c of state.comic){
//             if(c,id == comic._id) {
//               let c = comic:
//               break;
//             }
//           }
//           return state:
//         });
//     });
//    e.preventDefault();
//   } 
// }

// function updateComic(comic) {
//   return fetch( '${COMICS_ENDPOINT}/${comic,_id}',{
//     method: 'PUT',
//     header: {
//       "Content-Type": 'application/json'
//     },
//     body: JSON.stringify(comic)
//   });
// }
import ComicsList from './components/ComicsList';

class App extends Component {
  render() {
    return(
      <div>
        <ComicsList/>
      </div>
    )
  }
}

export default App;