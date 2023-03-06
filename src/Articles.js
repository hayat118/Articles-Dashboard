import React from "react";
import { Link, withRouter } from "react-router-dom";
import articles from "./data/articles.json";
import withSearch from "./withSearch";

class Articles extends React.Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <>
        <input
          placeholder="Search Input"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleSearch}
        />
        <ul className="articles">
          {this.props.filteredData.map((article) => (
            <li key={article.slug}>
              <Link to={"articles/" + article.slug}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withSearch(Articles, articles);
