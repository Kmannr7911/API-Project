const url = 'https://crudcrud.com/api/7fc3e65760214ada9d75cd58022fb8de';
// Marvel Comics is an object representing Comics data
export async function updateComicsList(comics) {
    return fetch(`${url}/${comics.id}`, {
        method: 'PUT',
        body: JSON.stringify(comics)
    })
}

export async function createComicStory(comic, story) {
 // use fetch to call `url` endpoint
// fetch comic
// push to comic.story with `story` parameter
// update comic resource
}

export async function deleteComicStory(comic) {
    // update Comic with the new comic.story array
    // this is not actually a delete operation
    
}

export async function createComic(comic) {
    // use fetch to call `url` endpoint
   fetch(`${url}/comics`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(comic)
    });
   }
   
   export async function deleteComic(comic) {
       fetch( `${url}/${comic.id}`, {
           method: 'DELETE',
           HEADERS: {
               'Content-Type' : 'application/json'
           }
       });
   }

export async function getComics() {
    // use fetch to GET from `url` endpoint
    fetch ( `${url}/comics`, {
        method: 'GET'

    });
}

// the API file that exports all the fetch calls
// App.js to render components
// the components that will have forms and buttons to pass in the data to fetch