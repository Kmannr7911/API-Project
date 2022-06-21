import React, { Component } from "react";

export default class Comic extends React.Component {
   constructor(props){
    super(props);
    this.comic=props.comic
   }
    
   
   //render this component (Comic.js) inside ComicList.js
   //Look at Past JS Projects
   
    render() {
        console.log(this.comic)
        return (
            <>
            <p>
            {this.comic.title}
        </p>
                    <div className="button-container" 
                    onClick={() => this.deleteComic({ id: this.state.id})}>
                        <button type="Delete"
                        >delete</button>
                        </div>    
                        </>
        );
     }

}

//1) Add Delete Button on Line 21
//2) Figure out how to make Delete Button
//3)Watch Promineo Vids, Look at Videos
//4) How can I access the _id from crudcrud when you store it as my object? I can store the id but I am not able to do any other functions besides displaying it because I can't access the id. 
