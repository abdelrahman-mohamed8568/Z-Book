import { React, useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const [book, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=200")
      .then((res) => {
        const filteredBooks = res.data.filter((book) =>
          book.genres.includes(props.genres)
        );
        setBooks(filteredBooks);
        console.log(book);
      });
  }, [props.genres]);

  return (
    <>
      {book.map((book) => (
        <div className="card-container mt-5" key={book.id}>
          <div className="card">
            <div className="front-content">
              <img src={book.image_url} alt="#" />
            </div>
            <div className="content">
              <p>{book.title}</p>
              <h6>{book.genres}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
