import React, { useState, Fragment } from 'react';
import { COLORS, HIGHLIGHT_COLOR } from '../features/GLOBAL_SETTINGS';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 15px;
  border-top-left-radius: 1px;
  padding: 15px;
  min-height: 60px;
  max-height: 160px;
  flex: 200px 1 1;
  background: aliceblue;
`;

const ItemName = styled.p`
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
`;

const ItemType = styled.p`
  color: ${(props) => props.color || 'grey'};
`;

// const List = styled(OriginalList)`
//   padding: 50px;
//   overflow: hidden;
// `;

const Container = styled.div`
  padding: 50px;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Card = ({ name = 'ABABA', type = 'BuahBua', color, query }) => {
  return (
    <CardBody>
      <ItemName>{name}</ItemName>
      <ItemType color={color}>{type}</ItemType>
    </CardBody>
  );
};

const getColor = (type) => COLORS[type];

const ResultsOutput = ({ data, query }) => {
  const renderData =
    data && Object.entries(data).filter((entry) => entry[1] !== null);

  const renderFunc = ([type, data]) => {
    console.log(type, data);

    return (
      <Fragment key={uuid()}>
        {data.map((obj) => (
          <Card
            color={getColor(type)}
            type={type}
            name={obj.name || obj.title}
            query={query}
            key={uuid()}
          />
        ))}
      </Fragment>
    );
  };
  return (
    // <List
    //   itemLayout="vertical"
    //   dataSource={renderData}
    //   renderItem={renderFunc}
    // />

    <Container>{renderData.map(renderFunc)}</Container>
  );
};

export default ResultsOutput;
