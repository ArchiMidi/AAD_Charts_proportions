import './App.css';
import dataMap from './utils/dataMap'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Rectangles from './pages/Rectangles'
import NewRectangles from './pages/NewRectangles'
import InlineTriangles from './pages/InlineTriangles';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const data = dataMap()
  const dataArr = [...data].sort((a, b) => b[1].yearsWithAADAmount > a[1].yearsWithAADAmount)
  const location = useLocation();
  const routes = [
    { path: '/', element: <HomePage dataArr={dataArr} />, name: 'Home' },
    { path: '/inline', element: <InlineTriangles data={data} />, name: 'Inline Triangles' },
    { path: '/rect', element: <NewRectangles dataArr={dataArr} />, name: 'Rectangles' },
    { path: '/oldrect', element: <Rectangles dataArr={dataArr} />, name: 'Rectangles' },

    { path: '/*', element: <ErrorPage data={data} />, name: '404' },
  ]

  return (
    <div className={"App "}>


      <TransitionGroup component={null}>
        <CSSTransition key={location.key} classNames="page" timeout={300}>
          <Routes location={location}>
            {routes.map(({ path, element, name }, i) => {
              return <Route exact path={path} element={element} key={name + i} />
            })}
          </Routes>
        </CSSTransition>
      </TransitionGroup>


    </div>
  );
}

export default App;