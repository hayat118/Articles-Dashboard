import React from "react";

import people from "./data/got.json";
import withSearch from "./withSearch";

class People extends React.Component {
  state = {
    searchTerm: "",
  };

  render() {
    return (
      <>
        <input
          placeholder="Search"
          className="search"
          value={this.props.searchTerm}
          onChange={this.props.handleSearch}
        />
        <ul className="people">
          {this.props.filteredData.map((sp) => (
            <SinglePerson key={sp.name} {...sp} />
          ))}
        </ul>
      </>
    );
  }
}

function SinglePerson(props) {
  return (
    <li className="card">
      <div className="info">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
      <p>{props.description}</p>
      <a href={props.wikiLink}>Learn More!</a>
    </li>
  );
}

let allPeople = people.reduce((acc, cv) => {
  acc = acc.concat(cv.people);
  return acc;
}, []);

export default withSearch(People, allPeople);
