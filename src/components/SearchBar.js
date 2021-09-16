import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
    <div className="ui fluid action input">
      <input type="text" placeholder="Search..."/>
      <div className="ui button">Search</div>
    </div>
    )
  }
}

export default SearchBar;