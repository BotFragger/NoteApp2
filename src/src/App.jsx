import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home from './pages/Home';
import Header from './components/Header';
import Archive from './pages/Archive';
import NoteDetailWrapper from './pages/NoteDetail';
import NewNote from './pages/NewNote';

function App() {
  return (
    <>
    <div className="app-container">

    <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/arsip" element={<Archive/>} />
          <Route path="/tambahcatatan" element={<NewNote/>} />
          <Route path="/notes/:id" element={<NoteDetailWrapper/>} />
        </Routes>
      </main>
    </div>
    </>
  );
}

export default App;
