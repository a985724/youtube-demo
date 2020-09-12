import React, {useState} from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');
  const onFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(term);
  }
  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={onFormSubmit}>
        <div className="search-bar__field">
          <label className="search-bar__title">YouTube</label>
          <input
            type="text"
            className="search-bar__input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;