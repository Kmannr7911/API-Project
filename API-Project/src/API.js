const url = 'https://crudcrud.com/api/f3c33c54191f4a91bfec92c44311783c/comic';

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
   
   export async function deleteComic(id) {
       await fetch( `${url}/${id}`, {
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