class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = Math.min(this.state * 1.5, 100);
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}
const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 
    2019, 
    1008
);

console.log(sherlock.releaseDate); // 2019
console.log(sherlock.state); // 100
sherlock.fix();
console.log(sherlock.state); // 100

const picknick = new FantasticBook(
    "Аркадий и Борис Стругацкие", 
    "Пикник на обочине", 
    1972, 
    168
);

console.log(picknick.author); // "Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); // 10
picknick.fix();
console.log(picknick.state); // 15

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}
// Library
const library = new Library("Central Library");

// Add printed publications of different types
library.addBook(new DetectiveBook("Arthur Conan Doyle", "Sherlock Holmes", 1887, 200));
library.addBook(new FantasticBook("J.R.R. Tolkien", "The Lord of the Rings", 1954, 1178));
library.addBook(new NovelBook("Jane Austen", "Pride and Prejudice", 1813, 432));
library.addBook(new Magazine("National Geographic", 2023, 100));

// Find a book published in 1919 or create one if necessary
let book1919 = library.findBookBy("releaseDate", 1919);
if (!book1919) {
    book1919 = new NovelBook("John Dos Passos", "The Young Man's Adventure", 1919, 350);
    library.addBook(book1919);
}

console.log("Books in library:", library.books.length);

// Give any book
const givenBook = library.giveBookByName("Pride and Prejudice");
console.log("Given book:", givenBook.name);
console.log("Books remaining in library:", library.books.length);

// Damage issued book
givenBook.state = 20;
console.log("Book state after damage:", givenBook.state);

// Restore issued book
givenBook.fix();
console.log("Book state after restoration:", givenBook.state);

// Adding the restored book to the library
library.addBook(givenBook);
console.log("Books in library after returning:", library.books.length);