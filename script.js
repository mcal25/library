const daLibrary = [];


function Book(title, author, pages, publishedDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishedDate = publishedDate;
    this.id = crypto.randomUUID();
}

function makeAndStoreBook(title, author, publishedDate, pages) {
    daLibrary.push(new Book(title, author, publishedDate, pages));
}

makeAndStoreBook('Lawd of da Ringz', 'J-Dog', 2500, 1969);

function generateLibrary() {
    // loop through lib arr & displays each book on page
}


console.log(daLibrary);