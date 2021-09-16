import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }

  onKeyPressed = (e) => {
    if (e.key === 'Enter' && this.state.term !== '') {
      this.props.onSubmit(this.state.term)
    }
  }

  onClick = () =>  {
    if (this.state.term !== '') {
      this.props.onSubmit(this.state.term)
    }
  }

  render() {
    return (
    <div className="ui fluid action input">
      <input
        type="text"
        placeholder="Search..."
        value={ this.state.term } onChange={ this.onInputChange }
        onKeyPress={this.onKeyPressed}
      />
      <div className="ui button" onClick={this.onClick}>Search</div>
    </div>
    )
  }
}

export default SearchBar;