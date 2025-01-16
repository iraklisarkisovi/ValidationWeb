import { Route, Routes } from 'react-router-dom';
import Login from './Components/LoginForm';
import Register from './Components/RegisterForm';
import Dashboard from './Components/Dashboard';

function App() {

  return (
    <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </>
  );
}

export default App
