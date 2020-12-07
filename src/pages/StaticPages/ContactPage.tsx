import React from 'react';
import { Contact } from 'src/components/StaticPages/Contact';
import { MainLayout } from 'src/layouts/MainLayout';

const _ContactPage = () => {
  return (
    <MainLayout>
      <Contact />
    </MainLayout>
  );
};

const ContactPage = React.memo(_ContactPage);
export default ContactPage;
