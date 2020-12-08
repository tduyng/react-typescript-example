import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { GuestLinks } from './GuestLinks';
import { AuthLinks } from './AuthLinks';

const mapStateToProps = (state: AppState) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});
const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const _Home = (props: Props) => {
  const { loading, isAuthenticated } = props;
  return <>{!loading && isAuthenticated ? <AuthLinks /> : <GuestLinks />}</>;
};

const Home = connector(_Home);
export { Home };
