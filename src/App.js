import './App.css';
import dataMap from './utils/dataMap'
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import ErrorPage from './pages/ErrorPage';

function App() {
 const data = dataMap()
  const location = useLocation();
  const routes = [
    { path: '/', element: <HomePage data={data}/>, name: 'Home' },
    { path: '/second', element: <SecondPage data={data}/>, name: 'PageTwo' },
   
    { path: '/*', element: <ErrorPage />, name: '404' },
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