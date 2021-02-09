import React, { useState } from 'react';
import { Input } from 'antd';
import { apiStore } from '../features/store';
import compositionStore from '../features/CompositionStore';

import { observer } from 'mobx-react-lite';
import { autorun, reaction, toJS } from 'mobx';
// import {STARSHIPS_URL, PEOPLE_URL, PLANETS_URL, FILMS_URL } from '../features/const'
import { ARRAY_OF_URLS } from '../features/const';

const { Search } = Input;

/* reaction(
  () => apiStore.data,
  (data) => console.log(toJS(data))
); */

const SearchBar = observer(() => {
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);

    let value = input.trim();

    if (value.length >= 1) {
      apiStore.fetchData(ARRAY_OF_URLS(value));
    }
  };
  compositionStore.logServices();

  return (
    <>
      <Search
        value={input}
        placeholder="input search loading with enterButton"
        loading
        enterButton
        onChange={handleInput}
      />
      <br />
      {/* {apiStore.data.map((data, i) => (
        <p key={i}> {data}</p>
      ))} */}
    </>
  );
});

export default SearchBar;
