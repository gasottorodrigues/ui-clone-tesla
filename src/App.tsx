import React from 'react';

import Page from './page';
import { GlobalStyle } from './styles/Globals';

const App:React.FC = ()=>{
  return(
    <>
      <Page />
      <GlobalStyle />
    </>
  )
}

export default App;
