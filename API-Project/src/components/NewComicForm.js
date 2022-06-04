// import { useState } from "react";
// import React, { useState } from "react";

// export const NewComicForm = (props) => {
//     const [name, setName] = useState('');
//     const[area, setArea] = useState(undefined);

//     const handleAreaInput = (e) => {
//         const int = pareseInt(e.target.value, 10);
//         setArea(int >= 0 ? int : '');
//     }

//     const onSubmit = (e) => {
//         e.preventDefault();
//         if (name && area){
//             props.addNewStory({name,area});
//             setName('');
//             setArea('');
//         } else{
//             console.log('invalid input');
//         }
//     };

//     return(
//         <div>
//             <h4>Add a new comic</h4>
//             <form onSubmit={}>
//                 <input
//                     type='text'
//                     placeholder='name'
//                     onChange={(e) => setName(e.target.value)}
//                     />
//                     <input
//                         type='text'
//                         placeholder='name'
//                         onChange={handleAreaInput}
//                         value={area}
//                         />
//                         <button type='submit'>Add comic</button>
//             </form>
//         </div>
//     )
// };