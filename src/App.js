import './App.css';
import dataMap from './utils/dataMap'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import InlineTriangles from './pages/InlineTriangles';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const data = dataMap()
  const dataArr = [...data]  //.sort((a, b) => a[1].city > b[1].city)
  const location = useLocation();
  const routes = [
    { path: '/', element: <HomePage dataArr={dataArr} />, name: 'Home' },
    { path: '/inline', element: <InlineTriangles data={data} />, name: 'Inline Triangles' },

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