import React from "react";
import "./Search.css";
class Search extends React.Component {

  handleSearch = (e) => {
    this.props.searchItems(e.target.value);
  }

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
