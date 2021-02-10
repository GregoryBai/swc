import React, { useMemo, useCallback, useState, Fragment } from 'react';
import { COLORS } from '../features/GLOBAL_SETTINGS';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Descriptions, Card } from '.';

const Container = styled.div`
  padding: 20px;

  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-template-rows: repeat(auto-fit, minmax(50px, 80px));
`;

const getColor = (type) => COLORS[type];

const ResultsOutput = ({ data, query }) => {
  const [descData, setDescData] = useState(null);

  const handleCardClick = (info) => {
    console.log('CLICK', info);
    setDescData(info);
  };

  const closeDesc = () => {
    setDescData(null);
  };

  const renderData = useMemo(
    () => data && Object.entries(data).filter((entry) => entry[1] !== null),
    [data]
  );

  const renderFunc = useCallback(
    ([type, data]) => {
      return (
        <Fragment key={uuid()}>
          {data.map((obj) => (
            <Card
              onClick={() => handleCardClick(obj)}
              color={getColor(type)}
              type={type}
              name={obj.title || obj.name}
              query={query}
              key={uuid()}
            />
          ))}
        </Fragment>
      );
    },
    [query]
  );

  return (
    <main>
      {descData && <Descriptions descData={descData} onClose={closeDesc} />}
      <Container>{query && !descData && renderData.map(renderFunc)}</Container>
    </main>
  );
};

export default ResultsOutput;
