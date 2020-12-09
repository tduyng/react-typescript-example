import React from 'react';
import { Profile } from 'src/components/Auth/Profile';
import { MainLayout } from 'src/pages/layouts/MainLayout';

const _ProfilePage = () => {
  return (
    <MainLayout>
      <Profile />
    </MainLayout>
  );
};

const ProfilePage = React.memo(_ProfilePage);
export default ProfilePage;
