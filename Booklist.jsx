function BookList({ books, onRemoveBook }) {
    return (
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <strong>{book.title}</strong> by {book.author}
            <button onClick={() => onRemoveBook(book.id)}>Remove</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default BookList;
