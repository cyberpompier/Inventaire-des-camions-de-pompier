import React, { useState } from 'react';
  import VehicleForm from './VehicleForm';
  import MaterialForm from './MaterialForm';

  function Settings({ onClose, onAddVehicle, onAddMaterial }) {
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [showMaterialForm, setShowMaterialForm] = useState(false);

    const handleVehicleClick = () => {
      setShowVehicleForm(true);
      setShowMaterialForm(false);
    };

    const handleMaterialClick = () => {
      setShowMaterialForm(true);
      setShowVehicleForm(false);
    };

    const closeForm = () => {
      setShowVehicleForm(false);
      setShowMaterialForm(false);
    };

    return (
      <div className="settings-card">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Paramètres</h2>
        {!showVehicleForm && !showMaterialForm && (
          <>
            <button className="settings-button" onClick={handleVehicleClick}>Ajouter un véhicule</button>
            <button className="settings-button" onClick={handleMaterialClick}>Ajouter un matériel</button>
          </>
        )}
        {showVehicleForm && <VehicleForm onClose={closeForm} onSubmit={onAddVehicle} />}
        {showMaterialForm && <MaterialForm onClose={closeForm} onSubmit={onAddMaterial} />}
      </div>
    );
  }

  export default Settings;
