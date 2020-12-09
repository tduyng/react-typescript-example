import React from 'react';
import { Profile } from 'src/containers/Auth/Profile';
import { MainLayout } from 'src/layouts/MainLayout';

const _ProfilePage = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};

const ProfilePage = React.memo(_ProfilePage);
export default ProfilePage;
