import React, { useRef, useState, Fragment } from 'react';
import { COLORS, HIGHLIGHT_COLOR } from '../features/GLOBAL_SETTINGS';
import { v4 as uuid } from 'uuid';
import styled from 'styled-components';
import { Descriptions as OriginalDescriptions } from 'antd';
import { CloseCircleTwoTone as OriginalCloseCircleTwoTone } from '@ant-design/icons';

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Descriptions = styled(OriginalDescriptions)`
  margin: 10px;
  padding: 10px;
  border: 3px solid yellow;
  border-radius: 5px;

  & .ant-descriptions-title {
    border-bottom: 2px solid yellow;
  }
  & .ant-descriptions-item-content {
    margin-right: 10px;
  }
`;

const DescriptionsTitle = styled.p`
  display: flex;
  justify-content: space-between;
`;

const CloseCircleTwoTone = styled(OriginalCloseCircleTwoTone)`
  padding: 10px;
  transition: all ease-in-out 200ms;
  transform-origin: center;

  &:hover {
    transform: scale(1.5);
  }
`;

const Container = styled.div`
  padding: 20px;

  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  grid-template-rows: repeat(auto-fit, minmax(50px, 80px));
`;

const CardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 15px;
  border-top-left-radius: 1px;
  padding: 15px;

  background: aliceblue;
`;

const ItemName = styled.p`
    margin-right: 10px;
    margin-bottom: 0;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
  mar
`;

const ItemType = styled.p`
  text-transform: capitalize;
  color: ${(props) => props.color || 'grey'};
`;

const Letter = styled.span`
  color: ${(props) => (props.bold ? HIGHLIGHT_COLOR : 'inherit')};
  font-weight: ${(props) => (props.bold ? '900' : '400')};
`;

const Card = ({ data, name, type, color, query, onClick }) => {
  const letters = name.split('');
  const len = query.length;
  const stIndex = name.toLowerCase().search(query.toLowerCase());
  const endIndex = stIndex + len;

  const isBold = (indx) => {
    if (stIndex === -1) return false;
    if (stIndex <= indx && endIndex > indx) return true;
  };

  return (
    <CardBody onClick={() => onClick(data)}>
      <ItemName>
        {letters.map((letter, i) => (
          <Letter key={uuid()} bold={isBold(i)}>
            {letter === ' ' ? <>&nbsp;</> : letter}
          </Letter>
        ))}
      </ItemName>
      <ItemType color={color}>{type}</ItemType>
    </CardBody>
  );
};

const getColor = (type) => COLORS[type];

const ResultsOutput = ({ data, query }) => {
  const [descData, setDescData] = useState(null);

  const renderData =
    data && Object.entries(data).filter((entry) => entry[1] !== null);

  const handleCardClick = (info) => {
    setDescData(info);
    console.log(info);
  };

  const closeDesk = () => {
    setDescData(null);
  };

  const renderFunc = ([type, data]) => {
    return (
      <Fragment key={uuid()}>
        {data.map((obj) => (
          <Card
            data={obj}
            onClick={handleCardClick}
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
    <main>
      {descData && (
        <Descriptions
          title={
            <DescriptionsTitle>
              <span>Card Info:</span>
              <CloseCircleTwoTone twoToneColor="#f03" onClick={closeDesk} />
            </DescriptionsTitle>
          }
          layout="horizontal"
        >
          {Object.entries(descData).map(([key, value]) => (
            <Descriptions.Item key={uuid()} label={<b>{key}</b>}>
              {value}
            </Descriptions.Item>
          ))}
        </Descriptions>
      )}
      <Container>{query && !descData && renderData.map(renderFunc)}</Container>
    </main>
  );
};

export default ResultsOutput;
