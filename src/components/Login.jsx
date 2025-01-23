import React from 'react';

  function Login() {
    return (
      <div className="login-card">
        <h2>Connexion</h2>
        <form>
          <input type="text" placeholder="Nom d'utilisateur" className="login-input" />
          <input type="password" placeholder="Mot de passe" className="login-input" />
          <button type="submit" className="login-button">Soumettre</button>
        </form>
      </div>
    );
  }

  export default Login;
