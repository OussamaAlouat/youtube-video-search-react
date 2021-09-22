import React, { useState  } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value)
  }

  const onKeyPressed = (e) => {
    if (e.key === 'Enter' && term !== '') {
      props.onSubmit(term)
    }
  }

  const onClick = () =>  {
    if (term !== '') {
      props.onSubmit(term)
    }
  }

  return (
    <div className="ui fluid action input">
      <input
        type="text"
        placeholder="Search..."
        value={ term } onChange={ onInputChange }
        onKeyPress={onKeyPressed}
      />
      <div className="ui button" onClick={onClick}>Search</div>
    </div>
  )
};

export default SearchBar;
