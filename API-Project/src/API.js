const url = 'https://crudcrud.com/api/1a404ad7b7414b2d927bfd0ab5151ba3/comics';
// Marvel Comics is an object representing Comics data
export async function updateComic(comic) {
    await fetch(`${url}/${comic._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comic)
    })
}

export async function createComic(comic) {
    console.log('comic to create', JSON.stringify(comic))
    try {
   const response = await fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comic)
    });
    const data = response.json();
    console.log('create data', data);
    } catch (err) {
        console.log(`error when creating comic: ${err}`)
    }
}
   
   export async function deleteComic(comic) {
       await fetch( `${url}/${comic._id}`, {
           method: 'DELETE',
           HEADERS: {
               'Content-Type' : 'application/json'
           }
       });
   }

export async function getComics() {
    // use fetch to GET from `url` endpoint
    const data = await fetch(`${url}`);
    return data.json();
}

// the API file that exports all the fetch calls
// App.js to render components
// the components that will have forms and buttons to pass in the data to fetch