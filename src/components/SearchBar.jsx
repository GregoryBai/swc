import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Search = styled(Input.Search)`
  & .ant-input {
    border-radius: 5px;
  }
`;

const SearchBar = ({ query, setQuery, loading }) => {
  return (
    <>
      <Search
        value={query}
        placeholder="input search loading with enterButton"
        loading={loading}
        enterButton
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <br />
    </>
  );
};

export default SearchBar;
