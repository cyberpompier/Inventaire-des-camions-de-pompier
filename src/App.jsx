import React from 'react';
  import DropdownMenu from './components/DropdownMenu';

  function App() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Inventaire des Camions de Pompier</h1>
        </header>
        <DropdownMenu />
        {/* Add more components here */}
      </div>
    );
  }

  export default App;
