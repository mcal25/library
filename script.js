let daLibrary = [];


function Book(title, author, pages, publishedDate, finishedReading) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publishedDate = publishedDate;
    this.finishedReading = false;
    this.id = crypto.randomUUID();
    this.toggleRead = function () {
        this.finishedReading == true ? false : true;
    }
}

function makeAndStoreBook(title, author, pages, publishedDate, finishedReading) {
    daLibrary.push(new Book(title, author, pages, publishedDate, finishedReading));
}

// order my props are in is how I have to setup my form data ^^

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
// console.log(bookList);




function generateLibrary() {
    // loop through lib arr & displays each book on page
    while (bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    };
    for (let i = 0; i < daLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('book-card');
        bookList.append(card);
        const bookTitle = document.createElement('h1');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = daLibrary[i].title
        card.append(bookTitle);
        const readToggleButton = document.createElement('button');
        readToggleButton.classList.add('read-toggle-button');
        readToggleButton.textContent = 'In progress';
        readToggleButton.addEventListener('click', () => {
            readToggleButton.textContent = readToggleButton.textContent == 'In progress' ? 'Finished reading' : 'In progress';
            for (let i = 0; i < daLibrary.length; i++) {
                if (card.querySelector('h1').textContent == daLibrary[i].title) {
                    daLibrary[i].finishedReading = daLibrary[i].finishedReading == true ? false : true;
                }
            }
        });
        card.append(readToggleButton);
        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = 'Remove';
        removeBookButton.classList.add('remove-book-button');
        removeBookButton.addEventListener('click', () => {
            console.log(this.id)
            daLibrary = daLibrary.filter(book => book.id != daLibrary[i].id);
            generateLibrary();
        });
        card.append(removeBookButton);
    }
}

generateLibrary();

const newBookButton = document.getElementById('new-book-button');
const dialog = document.getElementById('new-book-dialog');
const closeDialogButton = document.getElementById('close-dialog-button');
const submitBookButton = document.getElementById('submit-book-button');

newBookButton.addEventListener('click', () => {
    dialog.showModal();
})

submitBookButton.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const publishedDate = document.getElementById('published-date').value;
    const finishedReading = document.getElementById('finished-reading').value;
    // const formData = {
    //     title: title,
    //     author: author,
    //     pages: pages,
    //     publishedDate: publishedDate,
    //     finishedReading: finishedReading,
    // };
    // console.log(formData);
    makeAndStoreBook(title, author, pages, publishedDate, finishedReading);
    generateLibrary();
})


closeDialogButton.addEventListener('click', () => {
    dialog.close();
})


// console.log(daLibrary);

// console.log(bookList);