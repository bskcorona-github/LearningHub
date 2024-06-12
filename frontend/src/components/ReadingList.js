import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReadingList = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // APIから本のリストを取得
  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the books!', error);
      });
  }, []);

  // 新しい本を追加
  const addBook = () => {
    axios.post('http://localhost:5000/books', {
      title,
      author,
      status: 'Not Started'
    })
    .then(response => {
      setBooks([...books, response.data]);
      setTitle('');
      setAuthor('');
    })
    .catch(error => {
      console.error('There was an error adding the book!', error);
    });
  };

  return (
    <div>
      <h2>読書履歴</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="タイトル"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="著者"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default ReadingList;
