const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';


function getData<T>(url: string): Promise<T> {

    return fetch(url).then(response => {

        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
}



getData<{id: number, email: string}[]>(COMMENTS_URL)
    .then(data => {
        data.forEach(el => console.log(`ID: ${el.id}, EMAIL: ${el.email}`))
    })
    .catch(err => console.log(err.message))