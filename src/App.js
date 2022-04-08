import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';


import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  function sumMixedValuesArray(arr) {
    return arr.map(e => (typeof e === 'number') ? e : 0).reduce((acc, val) => acc + val)
  }
  

  const location = useLocation();
  const routes = [
    { path: '/', element: <HomePage  sumMixedValuesArray={sumMixedValuesArray} />, name: 'Home' },
    // { path: '/second', element: <SecondPage sumMixedValuesArray={sumMixedValuesArray}/>, name: 'Home' },
   
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