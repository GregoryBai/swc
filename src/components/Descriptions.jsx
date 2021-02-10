import { CloseCircleTwoTone as OriginalCloseCircleTwoTone } from '@ant-design/icons';
import { Descriptions as OriginalDescriptions } from 'antd';
import { v4 as uuid } from 'uuid';
import { useCallback } from 'react';
import styled from 'styled-components';

const AntDescriptions = styled(OriginalDescriptions)`
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

const Descriptions = ({ onClose, descData }) => {
  const renderItems = useCallback(() => {
    return Object.entries(descData).map(([key, value]) => (
      <AntDescriptions.Item key={uuid()} label={<b>{key}</b>}>
        {value}
      </AntDescriptions.Item>
    ));
  }, [descData]);

  return (
    <AntDescriptions
      title={
        <DescriptionsTitle>
          <span>Card Info:</span>
          <CloseCircleTwoTone twoToneColor="#f03" onClick={onClose} />
        </DescriptionsTitle>
      }
      layout="horizontal"
    >
      {renderItems()}
    </AntDescriptions>
  );
};

export default Descriptions;
