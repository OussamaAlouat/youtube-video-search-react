import React from 'react';
import youtube from '../api/youtube';
import Header from './Header';
import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit = async (term) => {
    console.log(term)
    const response = await youtube.get('/search', {
      params: {
          q: term
      }
    });

    console.log(response)
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