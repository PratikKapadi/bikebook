import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Header.css'; // Optional: For custom styling

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <button className="btn btn-success" onClick={handleLogoClick}>
        BikeBook
      </button>
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search bikes and more..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="location-selector">
        <select>
          <option value="location1">Pune</option>
          <option value="location2">Nanded</option>
          <option value="location3">Mumbai</option>
        </select>
      </div>
      <div className="liked-bikes">
        <span role="img" aria-label="heart">❤️</span>
      </div>
      <div className="login-register">
        <button onClick={() => navigate('/login')}>Login/Register</button>
      </div>
    </header>
  );
};

export default Header;
