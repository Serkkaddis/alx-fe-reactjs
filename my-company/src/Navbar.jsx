import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', marginRight: '20px' }}>About</Link>
      <Link to="/services" style={{ color: 'white', marginRight: '20px' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
