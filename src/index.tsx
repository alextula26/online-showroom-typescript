import React from 'react';
import ReactDOM from 'react-dom';
import OnlineShowroomApp from './App';
// import './scss/compiled.scss';

import './scss/compiled.scss';
import './scss/theme.scss';

ReactDOM.render(
  <React.StrictMode>
    <OnlineShowroomApp
      mainPageType="listModelsByBrand"
      theme="autocrm10"
    />
  </React.StrictMode>,
  document.getElementById('root')
);
