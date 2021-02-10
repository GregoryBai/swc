import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { HIGHLIGHT_COLOR } from '../features/GLOBAL_SETTINGS';

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

const isBold = (indx, stIndex, endIndex) => {
  if (stIndex === -1) return false;
  if (stIndex <= indx && endIndex > indx) return true;
};

const Card = ({ name = '', type, color, query = '', onClick }) => {
  const letters = name.split('');
  const len = query.length;
  const stIndex = name.toLowerCase().search(query.toLowerCase());
  const endIndex = stIndex + len;

  return (
    <CardBody onClick={onClick}>
      <ItemName>
        {letters.map((letter, i) => (
          <Letter key={uuid()} bold={isBold(i, stIndex, endIndex)}>
            {letter === ' ' ? <>&nbsp;</> : letter}
          </Letter>
        ))}
      </ItemName>
      <ItemType color={color}>{type}</ItemType>
    </CardBody>
  );
};

export default Card;
