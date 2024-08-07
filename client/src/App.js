// App.js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
import Home from './Home';
import { useState } from 'react';
import Error from './Error';
import SupportPage from './Support';
import Market from './Market'
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className="App">
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Home mode={mode} toggleMode={toggleMode} />} />
          <Route path='/chats' element={<Chatpage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='/education' element={<Market />} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
