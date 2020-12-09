import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Alert } from 'antd';

const mapStateToProps = (state: AppState) => ({
  alerts: state.alerts,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _AppAlert = (props: Props) => {
  const { alerts } = props;
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert, index) => {
      return (
        <div className="container">
          <div className="alert-section">
            <Alert
              message={alert.msg}
              type={alert.type}
              key={index}
              showIcon
              closable
            ></Alert>
          </div>
        </div>
      );
    })
  );
};

export const AppAlert = connector(_AppAlert);
