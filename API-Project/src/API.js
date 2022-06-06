const url = 'https://crudcrud.com/api/ed7cd3867c8547928eb2c629ce50824e/comics';

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