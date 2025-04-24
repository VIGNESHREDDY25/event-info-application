import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateEvent from './pages/CreateEvent';
import EventList from './pages/EventList';
import Navbar from './components/Navbar'; // ✅ import Navbar

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Add Navbar above Routes */}
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
