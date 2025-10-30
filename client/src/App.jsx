import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import Dashboard from './Pages/Dashboard';
import ResumeBuilder from './Pages/ResumeBuilder';
import Preview from './Pages/Preview';
import Login from './Pages/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='app' element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='builder/:resumeId' element={<ResumeBuilder></ResumeBuilder>}></Route>
        </Route>

        <Route path='view/:resumeId' element={<Preview></Preview>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
};

export default App;