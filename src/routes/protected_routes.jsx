/** @format */

import React from 'react';
import DashboardPage from './../pages/dashboard';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Route, Routes } from 'react-router-dom';
import Layout from './../components/layout';
import DetailPage from "./../pages/detail"

const ProtectedRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/:id" element={<DetailPage/>} />
      </Routes>
    </Layout>
  );
};

export default withAuthenticator(ProtectedRouter, {
  includeGreetings: true,
});
