import React, { useState } from 'react';
  import Login from './Login';
  import Settings from './Settings';
  import DisplayCards from './DisplayCards';

  function DropdownMenu({ onAddVehicle, onAddMaterial, vehicles }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleLoginClick = () => {
      setShowLogin(true);
      setShowSettings(false);
      setIsOpen(false);
    };

    const handleSettingsClick = () => {
      setShowSettings(true);
      setShowLogin(false);
      setIsOpen(false);
    };

    const closeAll = () => {
      setShowLogin(false);
      setShowSettings(false);
    };

    return (
      <div className="dropdown">
        {!showLogin && !showSettings && (
          <button onClick={toggleMenu} className="dropdown-button">
            Menu
          </button>
        )}
        {isOpen && (
          <ul className="dropdown-menu">
            <li onClick={handleLoginClick}>Connexion</li>
            <li>
              Véhicules
              <DisplayCards data={vehicles} type="Véhicule" />
            </li>
            <li>Matériels</li>
            <li onClick={handleSettingsClick}>Paramètres</li>
          </ul>
        )}
        {showLogin && <Login onClose={closeAll} />}
        {showSettings && <Settings onClose={closeAll} onAddVehicle={onAddVehicle} onAddMaterial={onAddMaterial} />}
      </div>
    );
  }

  export default DropdownMenu;
