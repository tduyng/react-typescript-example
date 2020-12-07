import React from 'react';
import { GuestLinks } from './GuestLinks';
import { connect, ConnectedProps } from 'react-redux';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading,
  isAuthenticated: state.app.isAuthenticated,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _Home = (props: Props) => {
  const { loading, isAuthenticated } = props;
  return (
    <>{!loading && isAuthenticated ? <div>Hi there!</div> : <GuestLinks />}</>
  );
};

const Home = connector(_Home);
export { Home };
