import React, { useState } from 'react';

  function VehicleForm({ onClose, onSubmit }) {
    const [vehicleData, setVehicleData] = useState({
      name: '',
      registration: '',
      station: '',
      function: '',
      link: '',
      photo: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setVehicleData({ ...vehicleData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(vehicleData);
      onClose();
    };

    return (
      <div className="form-card">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Ajouter un véhicule</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom" className="form-input" onChange={handleChange} />
          <input type="text" name="registration" placeholder="Immatriculation" className="form-input" onChange={handleChange} />
          <input type="text" name="station" placeholder="Caserne" className="form-input" onChange={handleChange} />
          <input type="text" name="function" placeholder="Fonction" className="form-input" onChange={handleChange} />
          <input type="url" name="link" placeholder="Lien (document ou média)" className="form-input" onChange={handleChange} />
          <input type="url" name="photo" placeholder="Photo (URL)" className="form-input" onChange={handleChange} />
          <button type="submit" className="form-button">Soumettre</button>
        </form>
      </div>
    );
  }

  export default VehicleForm;
