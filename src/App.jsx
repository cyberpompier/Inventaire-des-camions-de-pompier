import React, { useState } from 'react';
  import DropdownMenu from './components/DropdownMenu';

  function App() {
    const [vehicles, setVehicles] = useState([]);
    const [materials, setMaterials] = useState([]);

    const addVehicle = (vehicle) => {
      setVehicles([...vehicles, vehicle]);
    };

    const addMaterial = (material) => {
      setMaterials([...materials, material]);
    };

    return (
      <div className="app">
        <header className="app-header">
          <h1>Inventaire des Camions de Pompier</h1>
        </header>
        <DropdownMenu onAddVehicle={addVehicle} onAddMaterial={addMaterial} vehicles={vehicles} />
      </div>
    );
  }

  export default App;
