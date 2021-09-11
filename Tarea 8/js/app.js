'use stict'

const url = 'https://api.themoviedb.org/3/movie/550?api_key=4f04edf805f54f4a9c9550ab4dffb9b9';

fetch(url)
    .then(res => res.json())
    .then(data => {

        let element = document.getElementById('element')
        element.innerHTML = `<h1>${data.original_title}</h1>`
        console.log(data)
    })
    .catch(err => console.log(err));