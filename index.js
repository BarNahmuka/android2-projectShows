document.getElementById('fetchButton').addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.tvmaze.com/shows')

        if (!response.ok) {
            throw new Error(`HTTP error status ${response.status}`);
        }

        const data = await response.json();

        const names = data.map(show => show.name).join("\n");
        const genres = data.map(show => show.genres.join(", ")).join("\n");
        const premieres = data.map(show => show.premiered).join("\n");
        const ratings = data.map(show => show.rating.average).join("\n");
        const images = data.map(show => show.image.original).join("\n");

        const arrNames = names.split("\n");
        const arrGenres = genres.split("\n");
        const arrPremiered = premieres.split("\n");
        const arrRatings = ratings.split("\n");
        const arrImages = images.split("\n");

        const arrShows = [];

        for (let i = 0; i < arrNames.length; i++) {
            arrShows.push(new ShowsClass(arrNames[i], arrGenres[i], arrPremiered[i], arrRatings[i], arrImages[i]));
        }

        const container = document.getElementById('svgContainer');
        container.innerHTML = '';

        arrShows.forEach(show => {
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card');

            const imgElement = document.createElement('img');
            imgElement.src = show.image;
            imgElement.alt = show.name;

            const h3name = document.createElement('h3');
            h3name.innerText = show.name;

            const h3genre = document.createElement('h4');
            h3genre.innerText = `Genres: ${show.genre}`;

            const h3premiered = document.createElement('h4');
            h3premiered.innerText = `Premiered: ${show.premerie}`;

            const h3ratings = document.createElement('h4');
            h3ratings.innerText = `Rating: ${show.rating}`;

            cardContainer.appendChild(imgElement);
            cardContainer.appendChild(h3name);
            cardContainer.appendChild(h3genre);
            cardContainer.appendChild(h3premiered);
            cardContainer.appendChild(h3ratings);

            container.appendChild(cardContainer);
        });

    } catch (error) {
        console.error('Fetch error:', error);
    }
});