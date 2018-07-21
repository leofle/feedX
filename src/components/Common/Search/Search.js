import React from "react";
import "./Search.css";

class Search extends React.Component {
  handleSearch = event => {
    this.props.searchItems(event.target.value);
  };

  render() {
    return (
      <div className="searchWrapper">
        <input
          type={this.props.type}
          placeholder="type..."
          onKeyUp={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;
