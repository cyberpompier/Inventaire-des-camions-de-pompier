import React, { useState } from 'react';

  function MaterialForm({ onClose, onSubmit }) {
    const [materialData, setMaterialData] = useState({
      name: '',
      quantity: '',
      link: '',
      vehicleAssignment: '',
      location: '',
      photo: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setMaterialData({ ...materialData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(materialData);
      onClose();
    };

    return (
      <div className="form-card">
        <button className="close-button" onClick={onClose}>×</button>
        <h3>Ajouter un matériel</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom" className="form-input" onChange={handleChange} />
          <input type="number" name="quantity" placeholder="Quantité" className="form-input" onChange={handleChange} />
          <input type="url" name="link" placeholder="Lien (document ou média)" className="form-input" onChange={handleChange} />
          <input type="text" name="vehicleAssignment" placeholder="Affectation véhicule" className="form-input" onChange={handleChange} />
          <input type="text" name="location" placeholder="Emplacement" className="form-input" onChange={handleChange} />
          <input type="url" name="photo" placeholder="Photo (URL)" className="form-input" onChange={handleChange} />
          <button type="submit" className="form-button">Soumettre</button>
        </form>
      </div>
    );
  }

  export default MaterialForm;
