import React, { Component } from "react";

const withsearch = (OriginalComponent, dataset) => {
  return class extends Component {
    state = {
      searchTerm: "",
    };

    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let filteredData = dataset.filter(
        (item) =>
          item.title?.toLowerCase().includes(this.state.searchTerm) ||
          item.name?.toLowerCase().includes(this.state.searchTerm)
      );
      return (
        <>
          <OriginalComponent
            searchTerm={this.state.searchTerm}
            handleSearch={this.handleSearch}
            filteredData={filteredData}
          />
        </>
      );
    }
  };
};
export default withsearch;
