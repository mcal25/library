const daLibrary = [];


function Book(title, author, pages, publishedDate) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishedDate = publishedDate;
    this.id = crypto.randomUUID();
    this.toggleRead = function() {
        this.read == true ? false : true;
    }
}

function makeAndStoreBook(title, author, publishedDate, pages) {
    daLibrary.push(new Book(title, author, publishedDate, pages));
}

makeAndStoreBook('Lawd of da Ringz', 'J-Dog', 2500, 1969);
makeAndStoreBook('Berry Potta', 'Angry Lady', 1500, 2000);
makeAndStoreBook('Bilight', 'Stiffy Meijer', 100, 2012);
makeAndStoreBook('Stormsight Awwkhivez', 'Casper Sandersun', 100, 2012);
makeAndStoreBook('Fourth Bling', 'Jabekka Jarros', 100, 2012);
makeAndStoreBook('Dungeon Crawler Gary the Snail', 'Matthew Deezamin', 100, 2012);
makeAndStoreBook('Dungeon Crawler Gary the Snail', 'Matthew Deezamin', 100, 2012);
makeAndStoreBook('Dungeon Crawler Gary the Snail', 'Matthew Deezamin', 100, 2012);
makeAndStoreBook('Dungeon Crawler Gary the Snail', 'Matthew Deezamin', 100, 2012);





const bookList = document.getElementById('book-list');
console.log(bookList);




function generateLibrary() {
    // loop through lib arr & displays each book on page
    for(let i = 0; i < daLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('book-card');
        bookList.append(card);
        card.textContent = 'yeehaw';
        const bookTitle = document.createElement('h1');
        card.append(bookTitle);
        bookTitle.textContent = daLibrary[i].title
    }
}

generateLibrary();


console.log(daLibrary);

console.log(bookList);