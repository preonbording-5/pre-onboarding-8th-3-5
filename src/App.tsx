import React from 'react';
import GlobalStyles from './ui/core/GlobalStyles';
import { Page } from './ui/components/layout';
import NavBar from './ui/components/common/NavBar';
import SearchPage from './ui/pages/SearchPage';

const App = () => (
  <>
    <NavBar />
    <Page>
      <SearchPage/>
    </Page>
    <GlobalStyles />
  </>
);

export default App;
