import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

import { 
BrowserRouter as Router,
Routes,
Route
} from 'react-router-dom';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from '../src/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="*" element={<h1>Not found 404</h1>} />
        </Routes>
      </Router>
      {/* <Home/>
        <SignIn/> */}
    </ThemeProvider>

  );
}

export default App;
