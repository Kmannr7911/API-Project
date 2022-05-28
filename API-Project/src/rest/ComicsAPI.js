import { async } from "jshint/src/prod-params"
const COMICS_ENDPOINT = 'https://crudcrud.com/api/7fc3e65760214ada9d75cd58022fb8de'

class ComicsAPI {
    get = async () => {
      try{
        const resp = await fetch(COMICS_ENDPOINT);
        const data = await resp.json();
        return data;
      } catch (e) {
          console.log('Error, liike like fetchComics has an issue, e');
      }
    }

    put = async(Comics) => {
        try{
            const resp = await fetch('${COMICS_ENDPOINT}/${comics._id}' , {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(comics)
            });
            return await resp.json();
        } catch(e){
            console.log('Error, liike like fetchComics has an issue, e');
        }
    }
    
}

export const comicsAPI = newComicsAPI();