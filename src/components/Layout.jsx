import { Row as OriginalRow, Col } from 'antd';
import styled from 'styled-components';

const Row = styled(OriginalRow)`
  margin: 50px 0px;
`;

const Layout = ({ children }) => {
  return (
    <Row justify="space-around" align="middle">
      <Col span={8}>{children}</Col>
    </Row>
  );
};

export default Layout;
