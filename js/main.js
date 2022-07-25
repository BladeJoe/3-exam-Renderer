let elList = document.querySelector(".list");
let elBtnPokemon = document.querySelector(".btn-pokemon ")
let elBtnMovie = document.querySelector(".btn-movie ")
let elBtnBoth = document.querySelector(".btn-both ")
let elBtnClear = document.querySelector(".btn-clear ")
let elMovieLogo = document.querySelector(".movielogo");
let elPokemonLogo = document.querySelector(".pokemonlogo")

elList.innerHTML = null;

elBtnPokemon.addEventListener("click", function () {
    renderArray(pokemons);
    elPokemonLogo.style = "display:block;"
    elMovieLogo.style = "display:none !important;";
})

elBtnMovie.addEventListener("click", function () {
    renderArray(movies);
    elMovieLogo.style = "display:block;"
    elPokemonLogo.style = "display:none !important;";

})

elBtnBoth.addEventListener("click", function () {
    let newArray = movies.concat(pokemons)
    renderArray(newArray)
    elPokemonLogo.style = "display:block;"
    elMovieLogo.style = "display:block;"
})

elBtnClear.addEventListener("click", function () {
    elMovieLogo.style = "display:none !important;";
    elPokemonLogo.style = "display:none !important;";
    elList.innerHTML = null;
})

function renderArray(array) {
    elList.innerHTML = null;

    for (let item of array) {
        let newLi = document.createElement("li");
        newLi.setAttribute("style", "max-width:250px;flex-flow:column;");
        newLi.setAttribute("class", "card p-3 bg-white d-flex justify");
        let newImg = document.createElement("img");
        let newH3 = document.createElement("h4");
        let newh5 = document.createElement("h5")

        if (item.img) {
            newH3.textContent = item.name;
            newImg.src = item.img;
            newImg.style = "height: 150px;object-fit:contain;";
            newImg.setAttribute("alt", "pokemon")
            newh5.innerHTML = `Type: ${item.type} <br>
                    Height: ${item.height} <br> Weight: ${item.weight}`;

            newLi.appendChild(newImg);
            newLi.appendChild(newH3);
            newLi.appendChild(newh5);
            elList.appendChild(newLi)
        } else {

            let newLinkWatch = document.createElement("a")
            newLinkWatch.innerHTML = `Watch now`;
            newLinkWatch.href = `https://www.imdb.com/title/${item.imdbID}`;
            let newLinkBookmark = document.createElement("a")
            newLinkBookmark.innerHTML = `Bookmark`;
            let newLinkMore = document.createElement("a");
            newLinkMore.innerHTML = `More info`;

            newLinkBookmark.setAttribute("class", " btn btn-outline-success py-2");
            newLinkMore.setAttribute("class", " btn btn-outline-primary py-2");
            newLinkWatch.setAttribute("class", " btn btn-outline-danger py-2");
            newH3.textContent = item.Title;
            newLi.style = "display:flex;padding:0px; flex-direction:column; justify-content:space-between;max-width:250px;";
            newImg.src = item.Images;
            newImg.style = "height: 150px;object-fit:cover;";
            newImg.setAttribute("alt", "movie")
            newh5.innerHTML = `${item.Year}<br>${item.Genre}<br>${item.imdbRating}`;
            newLi.appendChild(newImg);
            newLi.appendChild(newH3);
            newLi.appendChild(newh5);
            newLi.appendChild(newLinkWatch);
            newLi.appendChild(newLinkBookmark);
            newLi.appendChild(newLinkMore);
            elList.appendChild(newLi);
        }




    }
}