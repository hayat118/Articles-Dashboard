import React from "react";
import books from "./data/books.json";
import withSearch from "./withSearch";

class Books extends React.Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <div className="page">
        <input
          placeholder="Search"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleSearch}
        />
        <ul className="archive">
          {this.props.filteredData.map((book) => (
            <Book key={book.isbn} {...book} />
          ))}
        </ul>
      </div>
    );
  }
}

function Book(props) {
  return (
    <li className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <p>
        Author:<span>{props.author}</span>
      </p>
      <a href={props.website}>
        <button>Buy Now</button>
      </a>
    </li>
  );
}

export default withSearch(Books, books);
