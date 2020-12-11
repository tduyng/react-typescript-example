import React from 'react';
import { Contact } from 'src/components/StaticPages/Contact';
import { PageLayout } from 'src/pages/layouts/PageLayout';

const _ContactPage = () => {
  return (
    <PageLayout>
      <Contact />
    </PageLayout>
  );
};

const ContactPage = React.memo(_ContactPage);
export default ContactPage;
