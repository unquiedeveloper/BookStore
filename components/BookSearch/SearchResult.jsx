
import React from 'react';

const SearchResult = ({ book }) => {
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      
    </div>
  );
};

export default SearchResult;
