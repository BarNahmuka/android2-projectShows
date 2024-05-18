class ShowsClass {
    #name
    #Genre
    #Premiered
    #Rating
    #Image


    constructor(name, genre, premerie, rating, image) {

        this.#name = name
        this.#Genre = genre
        this.#Premiered = premerie
        this.#Rating = rating
        this.#Image = image
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        this.#name = newName
    }
   
    get genre() {
        return this.#Genre
    }

    set genre(newGenre) {
        this.#Genre = newGenre
    }

    get premerie() {
        return this.#Premiered
    }

    set premerie(newPremerie) {
        this.#Premiered = newPremerie
    }

    get rating() {
        return this.#Rating
    }

    set rating(newRating) {
        this.#Rating = newRating
    }

    get image() {
        return this.#Image
    }

    set image(newImage) {
        this.#Image = newImage
    }


 

}

