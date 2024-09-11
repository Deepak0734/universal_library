const books = {
    1: [
        { subject: 'Math', bookLink: 'link-to-class1-math-book', solutionLink: 'link-to-class1-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
        
    ],
    2: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    3: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    4: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    5: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    6: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    7: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    8: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    9: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    10: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    11: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    12: [
        { subject: 'Math', bookLink: 'link-to-class2-math-book', solutionLink: 'link-to-class2-math-solution' },
        { subject: 'Science', bookLink: 'link-to-class2-science-book', solutionLink: 'link-to-class2-science-solution' },
        { subject: 'english', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'Hindi', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' },
        { subject: 'social-science', bookLink: 'link-to-class1-science-book', solutionLink: 'link-to-class1-science-solution' }
    ],
    // Continue for other classes...
    Bsc: [
        { subject: 'Physics', bookLink: 'link-to-class12-physics-book', solutionLink: 'link-to-class12-physics-solution' },
        { subject: 'Chemistry', bookLink: 'link-to-class12-chemistry-book', solutionLink: 'link-to-class12-chemistry-solution' }
    ]
};

document.getElementById('classSelect').addEventListener('change', function() {
    const selectedClass = this.value;
    const booksList = document.getElementById('booksList');
    booksList.innerHTML = '';

    if (books[selectedClass]) {
        books[selectedClass].forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.subject}</h3>
                <p><a href="${book.bookLink}" target="_blank">Book</a> | <a href="${book.solutionLink}" target="_blank">Solution</a></p>
            `;
            booksList.appendChild(bookItem);
        });
    } else {
        booksList.innerHTML = '<p>No books available for this class.</p>';
    }
});
