import React from 'react';
import GlobalStyles from './ui/core/GlobalStyles';
import { Page } from './ui/components/layout';
import NavBar from './ui/components/common/NavBar';

const App = () => (
  <>
    <NavBar />
    <Page>
    </Page>
    <GlobalStyles />
  </>
);

export default App;
