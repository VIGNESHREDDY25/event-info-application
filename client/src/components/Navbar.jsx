import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-blue-300">VigrithBook</Link>
      </div>
      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login" className="hover:text-blue-300">Login</Link>
            <Link to="/register" className="hover:text-blue-300">Register</Link>
          </>
        ) : (
          <>
            <Link to="/create" className="hover:text-blue-300">Create Event</Link>
            <button onClick={handleLogout} className="hover:text-red-300">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
