import React from 'react';
import youtube from '../api/youtube';
import Header from './Header';
import SearchBar from './SearchBar';
import './app.css'
class App extends React.Component {

  state = { videos: [] }

  onSearchSubmit = async (term) => {
    console.log(term)
    const response = await youtube.get('/search', {
      params: {
          q: term
      }
    });

    console.log(response.data.items)
    this.setState({ videos: response.data.items })
  }

  render() {
    return(
      <div>
        <Header />
        <div className="container">
          <SearchBar onSubmit={this.onSearchSubmit} />

          I have { this.state.videos.length } videos

        </div>
      </div>
    );
  }
}

export default App;