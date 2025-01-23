import React, { useState } from 'react';
  import Login from './Login';

  function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleLoginClick = () => {
      setShowLogin(true);
      setIsOpen(false);
    };

    return (
      <div className="dropdown">
        <button onClick={toggleMenu} className="dropdown-button">
          Menu
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={handleLoginClick}>Connexion</li>
            <li>Vérifier l'inventaire</li>
            <li>Mettre à jour l'inventaire</li>
            <li>Paramètres</li>
          </ul>
        )}
        {showLogin && <Login />}
      </div>
    );
  }

  export default DropdownMenu;
