import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Card, Avatar, Row, Col } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { PATH } from 'src/constants/paths';
const { Meta } = Card;

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}
const _Profile = (props: Props) => {
  const { user } = props;
  const history = useHistory();
  const onSetting = () => {
    history.push(PATH.HOME);
  };
  return (
    <div className="mt-1">
      <Row>
        <Col span={8} offset={10}>
          <Card
            hoverable
            style={{ width: 350 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" onClick={() => onSetting()} />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={user.username}
              description="User profile"
            ></Meta>
            <div className="additional">
              <p></p>
              <Row>
                <Col offset={4}>
                  <small>Email: </small>
                </Col>

                <Col offset={4}>
                  <strong>{user.email}</strong>
                </Col>
              </Row>
              <Row>
                <Col offset={4}>
                  <small>Password: </small>
                </Col>

                <Col offset={2}>
                  <strong>{user.password}</strong>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      ,
    </div>
  );
};

export const Profile = connector(_Profile);
