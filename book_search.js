/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 */
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    let results = [];

    // Iterate through each book in the scannedTextObj
    scannedTextObj.books.forEach(book => {
        // Check if the searchTerm is in the book's text
        if (book.text.includes(searchTerm)) {
            results.push({
                title: book.title,
                text: book.text
            });
        }
    });

    return { matches: results };
}

// Sample data for testing
const books = {
    books: [
        { title: "Book One", text: "This is the first book with The term." },
        { title: "Book Two", text: "Another book without the term." },
        { title: "Book Three", text: "Yet another book, this one with the term multiple times. The term appears twice." }
    ]
};

// Unit Tests

// Positive Test
function positiveTest() {
    const results = findSearchTermInBooks("term", books);
    console.log("Positive Test:", results.matches.length > 0);
}

// Negative Test
function negativeTest() {
    const results = findSearchTermInBooks("nonexistent", books);
    console.log("Negative Test:", results.matches.length === 0);
}

// Case-Sensitive Test
function caseSensitiveTest() {
    const results = findSearchTermInBooks("The", books);
    console.log("Case-Sensitive Test:", results.matches.length > 0 && !findSearchTermInBooks("the", books).matches.length);
}

// Run Tests
positiveTest();
negativeTest();
caseSensitiveTest();
