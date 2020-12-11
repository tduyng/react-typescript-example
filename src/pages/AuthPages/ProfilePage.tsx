import React from 'react';
import { Profile } from 'src/components/Auth/Profile';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _ProfilePage = () => {
  return (
    <PageLayout>
      <Profile />
    </PageLayout>
  );
};

const ProfilePage = React.memo(_ProfilePage);
export default ProfilePage;
