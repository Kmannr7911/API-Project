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
import { ComicsList } from './Components/ComicsList';

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