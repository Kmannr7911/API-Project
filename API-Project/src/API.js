// class House {
//     constructor (name) {
//         this.name = name;
//         this.rooms = [];
//     }
// }

// class Room {
//     constructor(name, area) {
//         this.name = name;
//         this.area = area;
//     }
// }

// class HouseService {
//     static url = 'https://crudcrud.com/api/7fc3e65760214ada9d75cd58022fb8de';

//     static getAllHouses() {
//         return $.get(this.url);
//     }

//     static getHouse(id) {
//         return $.get(this.url + './${id}');
//     }

//     static createHouse(house) {
//         return $.post(this.url, house);
//     }

//     static updateHouse(house {
//         return fetch.ajax({
//             url
//         })
//     })
// }

const url = 'https://crudcrud.com/api/7fc3e65760214ada9d75cd58022fb8de';
// Marvel Comics is an object representing Comics data
export function updateComicsList(Comics) {
    return fetch(`${url}/${comics.id}`, {
        method: 'PUT',
        body: JSON.stringify(comics)
    })
}

export function createComicStory(comics) {
 // use fetch to call `url` endpoint
}

export function deleteComicStory(id) {

}

export function getComics(id) {
    // use fetch to GET from `url` endpoint
}

//How you get the data and store it, i.e. array
//list out favorite link to stories
//display by click 
//find the app to list api of marvel comics