import React, { Component } from "react";

export default class Comic extends React.Component {
   constructor(props){
    super(props);
    this.comic=props.comic
   }
    
   
   //render this component (Comic.js) inside ComicList.js
   //Look at Past JS Projects
   
    render() {
        return (
                return React.createElement('comic', {class: 'btn-btn-primary'}, 'Delete')    
                        <p>
                            {this.comic.title}
                        </p>
                        );
    }
}