// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Route, Routes } from "react-router-dom";

import Landing from './views/landing/landing.component.jsx';
import Home from './views/home/home.component.jsx';
import Detail from './views/detail/detail.component.jsx';
import Create from './views/create/create.component.jsx';

//import './App.css';

function App() {
  //const [count, setCount] = useState(0) 

  return (
      <div className='App'>
        <Routes>
            {/* <Route exact path="/home" component={ Home } />
            <Route path="/detail/:id" component={ Detail } />
            <Route path="/create" component={ Create } /> */}
            <Route exact path="/" element={ <Landing />} />
            <Route exact path="/home" element={ <Home />} />
            <Route path="/home/:id" element={ <Detail />} />
            <Route path="/create" element={ <Create />} />

            {/* Así está las rutas del compa
            <Route path="/" element={ <Landing />} />
            <Route exact path="/drivers" element={ <Home />} />
            <Route path="/drivers/:id" element={ <Detail />} />
            <Route path="/create" element={ <Create />} /> */}

        </Routes>
      </div>







    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App;
