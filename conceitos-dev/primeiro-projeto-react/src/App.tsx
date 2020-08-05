import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

// function App() {
//   return <h1>Hello World!</h1>;
// }

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
