import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './componens/Dashboard';
import Login from './componens/Login';
import Navbars from './componens/Navbars';
import Register from './componens/Register';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/dashboard"
            element={
              <>
                <Navbars />
                <Dashboard />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
