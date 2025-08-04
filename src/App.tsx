import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Pages/Home';

const MainLayout: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="scroll-smooth">
        <Outlet />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/skills" element={<Home />} />
          <Route path="/Experience" element={<Home />} />
          <Route path="/Projects" element={<Home />} />
          <Route path="/Contact" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
