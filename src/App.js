import { useEffect } from 'react';
import PageRoutes from './_routes/PageRoutes';
import './App.css';
import { httpClient } from './utils/httpClient';

function App() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      httpClient.setToken(accessToken);
    }
  }, []);
  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
