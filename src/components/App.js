import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit = async (term) => {
    console.log(term)
  }

  render() {
    return(
      <div>
        <Header />
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;