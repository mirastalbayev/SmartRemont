import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Header from './components/Header/Header';
import Selects from './components/Selects/Selects';
import Lists from './components/Lists/Lists';
import Content from './components/Content/Content';

export default function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Selects />
          <Routes>
            <Route path=':goodtype' element={<Lists />}>
              <Route path=':goodId' element={<Content />} />
            </Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}