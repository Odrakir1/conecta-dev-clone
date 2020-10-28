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

import './mock';

import GuestRoutes from './routes/guestRoutes';

import {Provider} from 'react-redux';
import store from './stores/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <GuestRoutes path="/sign-in" element={<SignIn/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="*" element={<h1>Not found 404</h1>} />
        </Routes>
      </Router>
      {/* <Home/>
        <SignIn/> */}
    </ThemeProvider>
    </Provider>
  );
}

export default App;
