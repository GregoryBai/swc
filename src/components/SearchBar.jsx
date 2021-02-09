import React, { useState } from 'react';
import { Input, List, Card } from 'antd';
import { apiStore } from '../features/store';
import compositionStore from '../features/CompositionStore';
import { observer } from 'mobx-react-lite';
import { autorun, reaction, toJS } from 'mobx';

import { ARRAY_OF_URLS } from '../features/const';

const { Search } = Input;

/* reaction(
  () => apiStore.data,
  (data) => console.log(toJS(data))
); */

const SearchBar = ({ query, setQuery, loading }) => {
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Search
        value={query}
        placeholder="input search loading with enterButton"
        loading={loading}
        enterButton
        onChange={handleInput}
      />
      <br />
    </>
  );
};

export default SearchBar;
