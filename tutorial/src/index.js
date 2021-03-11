import React from "react";
import ReactDom from "react-dom";
//css
import "./index.css";

//set up vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91kt2pGYt8L._AC_UL200_SR200,200_.jpg",
  title: "I Love You to THE Mood and back",
  author: "Dr Seuss",
};

const secoundBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/91Hc5W9y5-L._AC_UL200_SR200,200_.jpg",
  title: "What Is God Like?",
  author: "Rachel Held Evans",
};

// stateless functional component
//always return JSX
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          For a free video course that takes you through the essential React
          concepts while you code-along, try out “React: Getting Started” on
          PluralSight. This course is completely free and even includes a
          Javascript crash course if you’re a bit rusty or still learning.
        </p>
      </Book>
      <Book
        img={secoundBook.img}
        title={secoundBook.title}
        author={secoundBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  return (
    <acticle className="book">
      <img src={props.img} />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
    </acticle>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
