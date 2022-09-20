import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';

export default function App() {
  const [globalAudioTrack, setGlobalAudioTrack] = useState()
  const [globalSearchTerm, setGlobalSearchTerm] = useState([])
  const [globalLoading, setGlobalLoading] = useState(false)
  const [globalSelected, setGlobalSelected] = useState(false)
  return (
    <Layout
      setGlobalLoading={setGlobalLoading}
      globalAudioTrack={globalAudioTrack}
      setGlobalSearchTerm={setGlobalSearchTerm}
      setGlobalSelected={setGlobalSelected}
    >
      <Routes>
        <Route path='/' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
        <Route path='/home' element={<Home setGlobalAudioTrack={setGlobalAudioTrack} />} />
      </Routes>
    </Layout>

  )
}
